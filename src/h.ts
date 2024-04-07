type Input = number | string;

function FirstEl(arr: Input[]) {
  return arr[0];
}

let m = FirstEl(["Shreeram", 2, "Sjrk"]);
console.log(m);

function identity1<T>(arg: T) {
  return arg;
}

let op = identity1<string>("hiii");
let op2 = identity1<number>(100);

console.log(op + "");
