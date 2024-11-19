// pending -> boolean
// fulfilled -> Task
// rejected -> boolean

import { ZodError } from 'zod';

interface Task {
  id: number;
  title: string;
  complete: boolean;
}

const taks1 = {
  id: 123,
  title: 'Lorem',
  complete: false,
};

type CustomDataResponse<T> =
  | {
      // pending
      isLoading: true;
      isError: false;
      data: undefined;
    }
  | {
      // fulfilled
      isLoading: false;
      isError: false;
      data: T;
    }
  | {
      // rejected
      isLoading: false;
      isError: true;
      data: undefined;
    };

const response1: CustomDataResponse<Task[]> = {
  isLoading: false,
  data: undefined,
  isError: true,
};

response1.isLoading = true;

// service -> custom hoom (useApi, CustomDataResponse) -> UI -> const { isError, data, isLoading  } = useApi()
export const fetchTasks = async () => {
  try {
    const response = await fetch('http://json-placeholder.com');
    // if (response.ok) {
    // const data: Task[] = await response.json() ;
    // CustomDataResponse
    // }
    return response.json();
  } catch (error) {
    if (error instanceof ZodError) {
      // Sentry.captureException(error)
    } else {
      // notify UI or service
    }
  }
  // axios.get<Task[]>() -> AxiosResponse<Task[]>
};
