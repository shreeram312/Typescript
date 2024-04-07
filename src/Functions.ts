function AddTwo(num: number): number {
  let x: number = num;
  return x + 2;
}

function Upper(str: string): string {
  return str.toUpperCase();
}

console.log(Upper("jffjdjf"));

console.log(AddTwo(55));

function SignUp(name: string, email: string, password: string): string[] {
  console.log("hi");
  return [name, email, password];
}

const u = SignUp("Shreeram", "shreeram@gmail.com", "1234");
console.log(u);

function getValueFromUser(val: number): string | boolean {
  if (val > 10) {
    return true;
  }
  return "Check ur num";
}

const h = getValueFromUser(2);
console.log(h);

const GetHello = (val: number): number => {
  return val;
};
const j: number = GetHello(10);
console.log(j);

const Marvel = [
  "THOR",
  "spiderman ",
  "ironman",
  "CAPTAINAMERICA",
  "LOKI",
  "wanda",
];

const obbj = {
  name: "SHreerma ",
  roll: 20,
};

Object.freeze(obbj);

const MappedMarvel = Marvel.map(
  (hero: string, index: number, arr: string[]) => {
    return `${hero} is great who ios present at the ${index + 1} ${arr}`;
  }
);

const SecondMarvel = Marvel.filter((hero) => {
  return hero.includes(hero.toUpperCase());
});

console.log(obbj);

console.log(SecondMarvel);

export {};
