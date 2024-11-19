// @errors: 2339
type NetworkLoadingState = {
  state: 'loading';
};

type NetworkFailedState = {
  state: 'failed';
  code: number;
};

type NetworkSuccessState = {
  state: 'success';
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NewNetworkState = {
  state: 'dont-know';
};
type YetAnotherNewNetworkState = {
  state: 'also-dont-know';
};

// ---cut---
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState
  | NewNetworkState
  | YetAnotherNewNetworkState;

function logger(state: NetworkState): string {
  // Right now TypeScript does not know which of the three
  // potential types state could be.

  // Trying to access a property which isn't shared
  // across all types will raise an error
  // if (state.state === 'failed') { // only NetworkFailedState
  //   state.code;
  //   return '';
  // }

  // if (state.state === 'loading') { // only NetworkFailedState
  //   return '';
  // }

  // state.response.title

  // state.response.title

  // By switching on state, TypeScript can narrow the union
  // down in code flow analysis
  switch (state.state) {
    case 'loading':
      return 'Downloading...';
    case 'failed':
      // The type must be NetworkFailedState here,
      // so accessing the `code` field is safe
      return `Error ${state.code} downloading`;
    case 'success':
      return `Downloaded ${state.response.title} - ${state.response.summary}`;
    default:
      throw new Error('Unhandled status');
  }
}

logger({ state: 'also-dont-know' });

// const name: string = 'Bartek';

// if () {

// }
