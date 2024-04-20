interface User {
  readonly dbbId: number;
  email: string;
  userId: number;
  StartTrial(): string;
  getcoupon(cname: string, cid: number): string;
}

const Shreeram: User = {
  dbbId: 777,
  email: "ram@gamil.com",
  userId: 1111,
  StartTrial: () => {
    return "uydgyus";
  },
  getcoupon: (cname: "kooo", cid: 11) => {
    return "sjgu";
  },
};

console.log((Shreeram.email = "shreeram@gmail.com"));
console.log(Shreeram.StartTrial());

export {};
