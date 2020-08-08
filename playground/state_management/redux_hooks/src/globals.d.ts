declare namespace Count {
  interface CounterSliceFeature {
    counter: CounterState;
  }
  interface CounterState {
    count: number;
  }
  interface CounterAction {
    type: string;
  }
}
declare namespace Movie {
  interface MovieData {
    title: string;
  }
  interface MovieType {
    id: number;
    data: MovieData;
  }
}
