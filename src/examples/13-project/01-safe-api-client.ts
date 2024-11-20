/**
 * Zadanie: Klient API z type-safety
 * Cel: Stworzenie klienta API, który dynamicznie generuje metody
 * na podstawie podanej specyfikacji API.
 *
 * Klient powinien obsługiwać zapytania GET i POST, zapewniając jednocześnie bezpieczeństwo
 * typów dla parametrów żądania (Request) i typów odpowiedzi (Response).
 *
 * Wymagania:
 * 1. Specyfikacja API: Zdefiniuj typ, który reprezentuje endpointy końcowe API, w tym parametry request i typy response.
 * 2. Generowanie Typów: Użyj Utility Types do wnioskowania typów ze specyfikacji API.
 * 3. Dynamiczne Generowanie Metod: Stwórz klasę, która generuje metody dla każdego endpointu zdefiniowanego w specyfikacji API.
 * 4. Type-safety: Upewnij się, że generowane metody gwarantują type-safety - powinny wymuszać poprawne typy dla parametrów requestu i zwracać odpowiednie typy odpowiedzi.
 * 5. Obsługa Błędów: Zaimplementuj podstawową obsługę błędów
 * 6. Use case: Wykorzystaj klienta API z przykladowym adresem np. https://api.example.com i specyfikacją API.
 */

interface AbstractSpec {
  [key: string]: {
    request: unknown;
    response: unknown;
  };
}

// class MySpec implements AbstractSpec {
//   foo = {
//     request: undefined,
//     response: undefined,
//   };
//   secondField = {

//   }
// }

// przykładowa struktura
interface ApiSpec extends AbstractSpec {
  getUser: {
    request: { id: number };
    response: { name: string; age: number };
  };
  createUser: {
    request: { name: string; age: number };
    response: { id: number };
  };
}

interface User {
  id: string;
  email: string;
  age: number;
}

type Email = User['email'];
type PickedEmail = Pick<User, 'email'>;

// type ApiSpec = {
//   getUser: {
//     request: { id: number };
//     response: { name: string; age: number };
//   };
//   createUser: {
//     request: { name: string; age: number };
//     response: { id: number };
//   };
// };
// const ApiSpec = {
//   getUser: {
//     request: { id: number };
//     response: { name: string; age: number };
//   };
//   createUser: {
//     request: { name: string; age: number };
//     response: { id: number };
//   };
// };

// type RequestType<T extends AbstractSpec, K extends keyof T> = T[K]['request'];
// type ResponseType<T extends keyof AbstractSpec> = AbstractSpec[T]['response'];

class ApiClient<Spec extends AbstractSpec> {
  constructor(public apiUrl = `https://${string}.com`) {}

  async request<EndpointType extends keyof Spec>( // Spec[EndpointType] extends keyof Spec,  EndpointType = 'getUser' | 'createUser'
    httpMethod: 'GET' | 'POST',
    resource: EndpointType,
    payload: Spec[EndpointType]['request'], //
  ): Promise<Spec[EndpointType]['response']> {
    // const respone = await fetch(`${apiUrl}/${resource});
    // const data = await response.json() as ResponseType<EndpointType>

    // option with RequestType and ResponseTy[e]
    // const data = {} as ResponseType<EndpointType>;
    // return Promise.resolve<ResponseType<EndpointType>>(data);

    return Promise.resolve({}) as Promise<Spec[EndpointType]['response']>;
  }
}

const client = new ApiClient();
const response = client.request('GET', 'getUser', { id: 123 });

// type CreateUserRequest = RequestType<'createUser'>

// const user = await apiClient.request('GET', 'getUser', { id: 1 });
// console.log(user); // { name: 'Alice', age: 30 }

// const newUser = await apiClient.request('POST', 'createUser', {
//   name: 'Bob',
//   age: 25,
// });
// console.log(newUser); // { id: 1 }
