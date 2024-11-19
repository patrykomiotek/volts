declare const brand: unique symbol;

type Brand<T, B> = T & { [brand]: B };

type UserId = Brand<string, 'UserId'>;
type PostId = Brand<string, 'PostId'>;

function getUserById(id: UserId) {
  // Funkcja, która przyjmuje tylko UserId
}

const userId = '123' as UserId;
const postId = '456' as PostId;

getUserById(userId); // Poprawne
getUserById(postId); // Błąd - postId nie jest typu UserId
