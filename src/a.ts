let x: string = "1";
console.log(x);

function Greet(firstName: string, num: number) {
  console.log("firstName is " + num);
}

Greet("shreeram", 7);

function Sum(a: number, b: string): string {
  return a + b;
}

const ans = Sum(25555, "3");

console.log(ans);

function IsLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

const anss = IsLegal(2);
console.log(anss);

function Tom(cb: Function) {
  console.log("before");
  setTimeout(cb, 4000);
  console.log("after");
}

function Jerry() {
  console.log("I am Jerry");
}

Tom(Jerry);
console.log("fgjdio");

const greet = (name: String) => `Hello, ${name}!`;

console.log(greet("damn"));

const doSomething: (a: number) => void = (a) => {
  console.log("hello");
  return 5;
};

const bu = doSomething(10);
console.log(bu);
