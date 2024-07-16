type User = {
  name: string;
  age: number;
};

type UserAge = Record<string, User>;

const users: UserAge = {
  "abc@123": {
    name: "ram",
    age: 20,
  },
  "abc@432": {
    name: "shree",
    age: 21,
  },
};

console.log(users);
export {};
