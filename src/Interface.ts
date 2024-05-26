interface User {
  readonly dbbId: number;
  email: string;
  userId: number;
  StartTrial(): string;
  getcoupon(cname: string, cid: number): string;
}

interface User {
  magicnumber?: number;
}

interface Admin extends User {
  role: "admin" | "ta";
}

const Shreeram: Admin = {
  dbbId: 777,
  role: "admin",

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
console.log(Shreeram.magicnumber);
console.log(Shreeram.role);
export {};
