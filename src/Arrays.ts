const superHeros: string[] = [];

superHeros.push("Captain America", "Ironman");
superHeros.unshift("Thor");
console.log(superHeros);

type User = {
  name: string;
  isAlive: boolean;
};

const heroPower: User[] = [];

heroPower.push({ name: "wanda", isAlive: true });

console.log(heroPower);

export {};
