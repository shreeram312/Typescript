interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filterarr(users: User[]) {
  return users.filter((user) => user.age >= 18);
}

console.log(
  filterarr([
    {
      firstName: "Shreeram",
      lastName: "Mutukunndu",
      age: 20,
    },
    {
      firstName: "Shreeteja",
      lastName: "Mutukunndu",
      age: 17,
    },
  ])
);

function abb() {
  console.log("Hi ");
}
