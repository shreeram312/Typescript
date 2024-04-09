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

export {};
