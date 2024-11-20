// Define the shape of the state
export interface State {
  [key: string]: any; // Allow any key with any value
}

// Define action types
export interface Action<T = any> {
  type: string;
  payload?: T;
}

// import { State, Action } from './types';

class Store {
  private state: State;
  private listeners: Array<(state: State) => void> = [];

  constructor(initialState: State) {
    this.state = initialState;
  }

  // Get the current state
  getState(): State {
    return this.state;
  }

  // Subscribe to state changes
  subscribe(listener: (state: State) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  // Dispatch an action to update the state
  dispatch(action: Action) {
    switch (action.type) {
      case 'SET_STATE':
        this.state = { ...this.state, ...action.payload };
        break;
      case 'CLEAR_STATE':
        this.state = {};
        break;
      default:
        console.warn(`Unknown action type: ${action.type}`);
    }
    this.listeners.forEach((listener) => listener(this.state));
  }
}

// import { Action } from './types';

// Action creators
export const setState = (payload: any): Action => ({
  type: 'SET_STATE',
  payload,
});

export const clearState = (): Action => ({
  type: 'CLEAR_STATE',
});

// Create a new store with an initial state
const store = new Store({ user: null });

// Subscribe to state changes
const unsubscribe = store.subscribe((state) => {
  console.log('State changed:', state);
});

// Dispatch actions to update the state
store.dispatch(setState({ user: { name: 'Alice', age: 30 } }));
store.dispatch(setState({ user: { name: 'Bob', age: 25 } }));
store.dispatch(clearState());

// Unsubscribe from state changes if needed
unsubscribe();

export default Store;
