// src/types.ts

// Branded type dla ID zadania
declare const TaskIdBrand: unique symbol;
export type TaskId = string & { readonly [TaskIdBrand]: typeof TaskIdBrand };

// Enum dla statusu zadania
export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

// Interfejs dla zadania
export interface Task {
  id: TaskId;
  title: string;
  description: string;
  status: TaskStatus;
  assignee?: string;
  dueDate?: Date;
}

// Typ dla tworzenia nowego zadania
export type NewTask = Omit<Task, 'id' | 'status'> & { status?: TaskStatus };

// Generyczny typ dla akcji
export type Action<T extends string, P = void> = P extends void
  ? { type: T }
  : { type: T; payload: P };

// Typy akcji
export type TaskAction =
  | Action<'ADD_TASK', NewTask>
  | Action<'UPDATE_TASK', Task>
  | Action<'DELETE_TASK', TaskId>
  | Action<'SET_STATUS', { id: TaskId; status: TaskStatus }>;

// src/taskManager.ts
import { Task, TaskId, NewTask, TaskAction, TaskStatus } from './types';

class TaskManager {
  private tasks: Map<TaskId, Task> = new Map();

  createTask(newTask: NewTask): Task {
    const id = this.generateId();
    const task: Task = {
      ...newTask,
      id,
      status: newTask.status || TaskStatus.TODO,
    };
    this.tasks.set(id, task);
    return task;
  }

  updateTask(updatedTask: Task): void {
    if (this.tasks.has(updatedTask.id)) {
      this.tasks.set(updatedTask.id, updatedTask);
    } else {
      throw new Error('Task not found');
    }
  }

  deleteTask(id: TaskId): void {
    this.tasks.delete(id);
  }

  getTask(id: TaskId): Task | undefined {
    return this.tasks.get(id);
  }

  getAllTasks(): Task[] {
    return Array.from(this.tasks.values());
  }

  private generateId(): TaskId {
    return `task_${Date.now()}` as TaskId;
  }

  dispatch(action: TaskAction): void {
    switch (action.type) {
      case 'ADD_TASK':
        this.createTask(action.payload);
        break;
      case 'UPDATE_TASK':
        this.updateTask(action.payload);
        break;
      case 'DELETE_TASK':
        this.deleteTask(action.payload);
        break;
      case 'SET_STATUS':
        const task = this.getTask(action.payload.id);
        if (task) {
          this.updateTask({ ...task, status: action.payload.status });
        }
        break;
    }
  }
}

export const taskManager = new TaskManager();

// src/main.ts
import { taskManager } from './taskManager';
import { TaskStatus, NewTask, TaskId } from './types';

function renderTasks() {
  const taskList = document.getElementById('task-list');
  if (taskList) {
    taskList.innerHTML = taskManager
      .getAllTasks()
      .map(
        (task) => `
      <li>
        <strong>${task.title}</strong> (${task.status})
        <button onclick="deleteTask('${task.id}')">Delete</button>
        <button onclick="toggleStatus('${task.id}')">Toggle Status</button>
      </li>
    `,
      )
      .join('');
  }
}

function addTask(event: Event) {
  event.preventDefault();
  const titleInput = document.getElementById('task-title') as HTMLInputElement;
  const descInput = document.getElementById(
    'task-description',
  ) as HTMLInputElement;

  const newTask: NewTask = {
    title: titleInput.value,
    description: descInput.value,
  };

  taskManager.dispatch({ type: 'ADD_TASK', payload: newTask });
  renderTasks();

  titleInput.value = '';
  descInput.value = '';
}

function deleteTask(id: string) {
  taskManager.dispatch({ type: 'DELETE_TASK', payload: id as TaskId });
  renderTasks();
}

function toggleStatus(id: string) {
  const task = taskManager.getTask(id as TaskId);
  if (task) {
    const newStatus =
      task.status === TaskStatus.TODO
        ? TaskStatus.IN_PROGRESS
        : task.status === TaskStatus.IN_PROGRESS
          ? TaskStatus.DONE
          : TaskStatus.TODO;
    taskManager.dispatch({
      type: 'SET_STATUS',
      payload: { id: id as TaskId, status: newStatus },
    });
    renderTasks();
  }
}

document.getElementById('task-form')?.addEventListener('submit', addTask);

// only for this example ;)
(window as any).deleteTask = deleteTask;
(window as any).toggleStatus = toggleStatus;

renderTasks();

// index.html

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Task Management System</title>
//   </head>
//   <body>
//     <h1>Task Management System</h1>
//     <form id="task-form">
//       <input type="text" id="task-title" placeholder="Task Title" required />
//       <input
//         type="text"
//         id="task-description"
//         placeholder="Task Description"
//         required
//       />
//       <button type="submit">Add Task</button>
//     </form>
//     <ul id="task-list"></ul>
//     <script type="module" src="/src/main.ts"></script>
//   </body>
// </html>
