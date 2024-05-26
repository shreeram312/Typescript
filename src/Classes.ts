class User {
  constructor(public email: string, public name: string, private city: string) {
    this.email = email;
    this.name = name;
    this.city = city;
  }

  get getMethod1(): string {
    return `magic${this.city}@gmail.com`;
  }

  set setMethod1(citykanaam: string) {
    this.city = citykanaam;
  }
  get getCity(): string {
    return this.city;
  }
}

const shree = new User("shree@gmail.com", "shree", "pune");
const mm: any = shree.getMethod1;
console.log(mm);
console.log(shree.getCity);
shree.setMethod1 = "delhi";
console.log(shree.getCity);

export {};
