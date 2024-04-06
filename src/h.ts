type Input = number | string;

function FirstEl(arr: Input[]) {
  return arr[0];
}

let m = FirstEl(["4", 2, "4"]);
console.log(m);
