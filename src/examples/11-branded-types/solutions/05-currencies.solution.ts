/**
 * Stwórz system branded types dla różnych walut (np. USD, EUR, GBP).
 * Napisz funkcję konwersji walut, która akceptuje źródłową walutę,
 * kwotę i docelową walutę.
 */

// your code here

// ues cases:
const usd = createCurrency(100, 'USD');
const eur = convertCurrency(usd, 'EUR', 0.85); // Konwersja USD na EUR
const gbp = createCurrency(50, 'GBP');

addCurrencies(usd, eur); // Powinno zgłosić błąd kompilacji (różne waluty)
addCurrencies(usd, createCurrency(200, 'USD')); // Powinno działać
