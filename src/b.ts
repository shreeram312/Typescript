interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function Legal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

const aj = Legal({
  firstName: "Shreeram",
  lastName: "Mutukundu",
  age: 200,
});

console.log(aj);
