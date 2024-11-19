/**
 * Stwórz interfejs Task z właściwościami:
 * id (number), title (string), completed (boolean).
 * Następnie utwórz tablicę zadań i funkcję do dodawania
 * nowych zadań.
 */

// Zdefiniuj interfejs Task
interface Task {
  id: number;
  title: string;
  complete: boolean;
}

// Utwórz tablicę tasks
const tasks = new Set<Task>();

// Zaimplementuj funkcję addTask
function addTask(title: string): void {
  // Implementacja
  tasks.add({
    id: 123,
    title,
    complete: false,
  });
  tasks.add({
    id: 123,
    title,
    complete: false,
  });
}

// Przykładowe użycie:
addTask('Learn TypeScript');
console.log(tasks.entries());

// {
//   key: string | Task;
// }

type CacheEntry = Record<string, Task>;

const cache: CacheEntry = {
  one: {
    id: 123,
    title: 'Kupić mleko',
    complete: false,
  },
};

const newTasks = new Map<string, Task>();
// newTasks.
newTasks.set('two', {
  id: 2,
  title: 'Kupić mleko',
  complete: false,
});

class MyCache {
  // constructor(private cache: CacheEntry) {}
  // constructor(private cache: Map<string, Task>) {}
  // private cache: Map<string, Task> = new Map();
  // private cache = new Map<string, Task>();
  private cache: Record<string, Task> = {};

  // constructor() {}

  add(key: string, value: Task) {
    this.cache.set(key, value);
  }
}

const _cache = new MyCache();
_cache.add('key-1', { id: 123, title: 'Kupić mleko', complete: false });
