/**
 * Stwórz typ HttpMethod reprezentujący metody HTTP:
 * "GET", "POST", "PUT", "DELETE". Następnie stwórz typ ApiEndpoint,
 * który będzie łączył metodę HTTP, znak "/", a następnie dowolny string.
 */
type HttpMethod = undefined; // change me
type ApiEndpoint = undefined; // change me

// example usage:
const endpoint1: ApiEndpoint = 'GET/users'; // Poprawne
const endpoint2: ApiEndpoint = 'POST/create-user'; // Poprawne
const endpoint3: ApiEndpoint = 'PATCH/update'; // Błąd - niepoprawna metoda HTTP
