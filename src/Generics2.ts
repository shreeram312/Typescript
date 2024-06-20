function SearchProducts<T>(products: T[]): T {
  // do some logic
  return products[2];
}

const node = SearchProducts([2, 3, 333333, 4, 4]);
console.log(node);
