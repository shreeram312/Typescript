// type User = {
//   firstName: string,
//   lastName: string,
//   age: number,
// };

type StringOrNumber = String | number;
function isId(id: StringOrNumber) {
  console.log("all fine");
}

isId("1indfjnskfm");

isId(3);
