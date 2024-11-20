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

type RequestParams<T extends keyof ApiSpec> = ApiSpec[T]['request'];
type ResponseType<T extends keyof ApiSpec> = ApiSpec[T]['response'];

class ApiClient {
  constructor(private baseUrl: string) {}

  async request<K extends keyof ApiSpec>(
    method: 'GET' | 'POST',
    endpoint: K,
    params?: RequestParams<K>,
  ): Promise<ResponseType<K>> {
    // Symulacja żądania HTTP (możesz użyć fetch lub axios tutaj)
    console.log(
      `Wykonywanie ${method} żądania do ${this.baseUrl}/${endpoint}`,
      params,
    );

    try {
      // Mockowanie odpowiedzi na podstawie punktu końcowego
      const mockResponse = this.mockResponse(endpoint);
      return new Promise((resolve) =>
        setTimeout(() => resolve(mockResponse), 1000),
      );
    } catch (error) {
      console.error('Błąd podczas wykonywania żądania:', error);
      throw error; // Rethrow the error after logging
    }
  }

  private mockResponse<K extends keyof ApiSpec>(endpoint: K): ResponseType<K> {
    // Zwróć dane mockowe na podstawie punktu końcowego
    switch (endpoint) {
      case 'getUser':
        return { name: 'Alice', age: 30 } as ResponseType<K>;
      case 'createUser':
        return { id: 1 } as ResponseType<K>;
      default:
        throw new Error('Nieznany punkt końcowy');
    }
  }
}

const apiClient = new ApiClient('https://api.example.com');

async function run() {
  const user = await apiClient.request('GET', 'getUser', { id: 1 });
  console.log(user); // { name: 'Alice', age: 30 }

  const newUser = await apiClient.request('POST', 'createUser', {
    name: 'Bob',
    age: 25,
  });
  console.log(newUser); // { id: 1 }
}

run();
