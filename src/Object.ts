const UserData = {
  name: "Goal",
  age: 22,
  surname: "Sharma",
  greet() {
    return `${this.name} is very ggod boy`;
  },
};

interface UserData {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
}

function NewData(NewData: UserData[]): any {
  const filteredNames = NewData.filter((data) => {
    // console.log(data.age < 20);
    return data.age < 20;
  });

  console.log(filteredNames);

  const xx = filteredNames.map((real) => {
    return real.address.city;
  });

  console.log(xx);
  //

  return xx;
}

console.log(
  NewData([
    {
      name: "Shreeeram",
      age: 22,
      address: {
        city: "Pune",
        country: "India",
      },
    },
    {
      name: "John",
      age: 20,
      address: {
        city: "Texas",
        country: "Us",
      },
    },
    {
      name: "ShreeTeja",
      age: 18,
      address: {
        city: "Mumbai",
        country: "India",
      },
    },
  ])
);

function DCdata({ name, email }: { name: string; email?: string }): {} {
  return { name: "shreeram", email: "shreeram@gmail.com " };
}

console.log(DCdata({ name: "Teja", email: "tej@gmai.com" }));

export {};
