function MaxValue(arr: number[]): number {
  let maxval = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxval) {
      maxval = arr[i];
    }
  }
  return maxval;
}

console.log(MaxValue([1, 2, 3]));

export function abb() {
  console.log("Hi jdfnkd");
}

abb();
