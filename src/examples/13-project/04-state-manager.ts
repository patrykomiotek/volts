// Define the shape of the state
export interface State {}

// Define action types
export interface Action<T = any> {
  type: string; //
  payload?: any;
}

class Store {
  dispatch(action: Action) {
    //
    switch (
      action.type // { type: "ACTION_NAME" }
      //
    ) {
    }
  }
}

// Create a new store with an initial state
const store = new Store({ user: null });

// Dispatch actions to update the state
store.dispatch(setState({ user: { name: 'Alice', age: 30 } }));

//

store.dispatch(setState({ user: { name: 'Bob', age: 25 } }));
store.dispatch(clearState());
