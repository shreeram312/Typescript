function Identity<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}
const finalBottle = Identity<Bottle>({
  brand: "Hero",
  type: 2,
});

console.log(finalBottle);

export {};
