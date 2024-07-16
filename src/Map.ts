const users = new Map();

users.set("abc@123", { name: "shree", age: 22 });
users.set("abc@123", { name: "shree", age: 555 });
users.set("abc@1222", { name: "ram", age: 22 });

console.log(users.size);
console.log(users);

export {};
