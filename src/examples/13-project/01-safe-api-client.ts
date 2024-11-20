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

// przykładowa struktura
type ApiSpec = {
  getUser: {
    request: { id: number };
    response: { name: string; age: number };
  };
  createUser: {
    request: { name: string; age: number };
    response: { id: number };
  };
};

type RequestType<T extends keyof ApiSpec> = ApiSpec[T]['request'];
type ResponseType<T extends keyof ApiSpec> = ApiSpec[T]['response'];

class ApiClient {
  constructor(public apiUrl = `https://${string}.com`) {}

  async request<EndpointType extends keyof ApiSpec>( // EndpointType = 'getUser' | 'createUser'
    httpMethod: 'GET' | 'POST',
    resource: EndpointType,
    payload: RequestType<EndpointType>,
  ): Promise<ResponseType<EndpointType>> {
    // const respone = await fetch(`${apiUrl}/${resource});
    // const data = await response.json() as ResponseType<EndpointType>
    const data = {} as ResponseType<EndpointType>;
    return Promise.resolve<ResponseType<EndpointType>>(data);
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
