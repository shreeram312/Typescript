type User = {
  _id: string;
  name: string;
  email: string;
  isActive: boolean;
};

let myUser = {
  readonly_id: "12345",
  name: "Shreeram ",
  email: "Sh@gmail.com",
  isActive: false,
};

console.log((myUser.name = "shree"));

console.log(myUser);

type CardNumber = {
  cardData: string;
};

type CardTarikh = {
  cardnela: string;
};

type CVV = {
  cvv: number;
};

type WholeCard = CardNumber & CardTarikh & CVV;

let MyDetails = {
  cardData: "12222",
  cardnela: "31122003",
  cvv: 312,
  nn: "dd",
};
console.log(MyDetails);

export {};
