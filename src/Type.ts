type User = {
  name: string;
  email?: string;
  phone?: number | boolean;
};

function CreateUser(user: User): User {
  console.log(user.name);
  return user;
}

console.log(CreateUser({ name: "Shreeram", phone: 123455 }));

export {};
