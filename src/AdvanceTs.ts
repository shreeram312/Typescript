type User = {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
};

// function SumofAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// }

// SumofAge(
//   {
//     name: "shree",
//     age: 20,
//   },
//   {
//     name: "ram",
//     age: 22,
//   }
// );

type PropUpdate = Pick<User, "name" | "email" | "age">;

type PartialPropUpdate = Partial<PropUpdate>;
function updateUser(updatedProps: PartialPropUpdate) {
  //hit the database

  console.log(updatedProps.name);
}

updateUser({
  name: "rammm",
});

const obj = {
  name: "shreeteja",
  age: 18,
};

obj.name = "teja";

console.log(obj);
export {};
