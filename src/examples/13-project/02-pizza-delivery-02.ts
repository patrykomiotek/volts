type Id = string;

type UserId = string;
type PizzaId = string;

type PizzaType = string;
// type PizzaType = {
// id: PizzaId;
// name: PizzaType;
// };

type User = {
  id: UserId;
};

type UserRequest = {
  userId: Id;
  pizzaType: PizzaType;
  count: number; // can be fractional
};

type OrderItem = {
  pizzaType: PizzaType;
  count: number;
};

type Order = {
  items: OrderItem[];
  totalAmount: number;
  amountPerUser: Map<User, number>;
};

type Wallet = {
  amount: number;
};

type PizzaPlace = {
  id: Id;
  name: string;
  phone: string;
  address: string;
};

type OrderConfirmed = {
  status: 'approved';
  reference: string;
};

type OrderRejected = {
  status: 'rejected';
};

type OrderBaking = {
  status: 'baking';
  deliveryTime: number;
};

type OrderDelivering = {
  status: 'delivering';
  deliveryTime: number;
  pizzaBoyNumber: string;
};

type OrderAwaiting = {
  status: 'delivering';
  pizzaBoyNumber: string;
};

type OrderReturned = {
  status: 'returned';
};

type OrderDelivered = {
  status: 'delivered';
};

type OrderConfirmation = OrderConfirmed | OrderRejected;
type OrderStatus =
  | OrderConfirmed
  | OrderBaking
  | OrderDelivering
  | OrderDelivered
  | OrderAwaiting
  | OrderReturned;

type Pizza = {
  type: PizzaType;
};

declare function startOrder();

// user: User -> { id: string }
// pizza: Pizza -> { id: string; name: PizzaType }

// declare function updateOrder(user: User, pizzaType: PizzaType);
declare function updateOrder(
  user: { id: '1234'; name: 'hawai' },
  pizzaType: PizzaType,
);

declare function closeOrder(): UserRequest[];

declare function prepareOrder(items: UserRequest[]): Order;

declare function collectMoney(user: User, amount: number, wallet: Wallet);

declare function order(items: OrderItem[], from: PizzaPlace): OrderConfirmation;

declare function checkOrderStatus(reference: string): OrderStatus;

declare function pickupAndPay(wallet: Wallet): Pizza[];

declare function dispatch(
  users: User[],
  requests: UserRequest[],
  delivery: Pizza[],
);
