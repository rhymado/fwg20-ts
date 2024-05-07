console.log("Hello World");

function greeting(name: string) {
  console.log(`Hello ${name}`);
}

greeting("1");

// ts bisa mengetahui tipe data dari suatu variabel
// 1. type assertion
// 2. type inference

let hobbies: string[] = []; // type assertion
const fruits = ["watermelon", "melon", "apple"]; // type inference
let age: number; // type assertion

// age = "10";
hobbies.push("true");

// tuple => array yg sudah diketahui tipe data isinya,
// array terstruktur

// const tup = [1, "dua", true];
let rgb: [number, number, number];
rgb = [1, 2, 3];
let tuple1: [boolean, ...number[]];
let tuple2: [number, ...string[], number];
let tuple3: [...string[], string, number];

tuple1 = [true, 1, 2, 3, 4, 5];
tuple2 = [1, "andi", "tono", 1];
tuple3 = ["anto", "rene", 1];

enum genList {
  male = "Male",
  female = "Female",
}

let gender = genList.male;

// untuk multi return dengan tipe data berbeda, bisa digunakan
// type union

type addResult = number | void;
const addition = function (...bil: [...number[]]): addResult {
  if (bil.length < 3) {
    return;
  }
  let total = 0;
  for (let num of bil) {
    total += num;
  }
  return total;
};

const result = addition(1, 2, 3, 4, 5);
if (result) {
  console.log(result);
}

const printFullName = (firstName: string, lastName?: string): void => {
  console.log(`${firstName} ${lastName}`);
};

const res = printFullName("andi");

const siswa = {
  name: "Nita",
  age: 20,
  address: "Jakarta",
};

type Person = {
  name: string;
  age: number;
  address?: string;
  getAddress?: () => string;
};

const guru: Person = {
  //   address: "Bandung",
  name: "Juki",
  age: 40,
  // isMarried: false,
};

// type Person = {}

interface Product {
  pName: string;
  price: number;
  promo: string;
}

interface Product {
  discount: number;
  stock: number;
}

class P implements Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getAddress(): string {
    return this.address;
  }
}

// class PR implements Product {
//   pName: string;
//   price: number;
//   promo: string;
//   discount: number;
//   stock: number;
// }

const person = new P("Juki", 40, "Bandung");
person.getAddress();

// interface sbg list abstraksi method implementasi
interface Animal {
  feet: number;
  fur: boolean;
  getSound: () => void;
}

const dog: Animal = {
  feet: 4,
  fur: true,
  getSound: () => {
    console.log("Woof");
  },
  //   diet: "Meat",
};

const cat = {
  feet: 4,
  fur: true,
  getSound: () => {
    console.log("Meow");
  },
  diet: "Meat",
};

function animalSound(animal: Animal): void {
  animal.getSound();
}

animalSound(dog);
animalSound(cat);

// Generic

function cetakVariabel<T>(variabel: T): void {
  console.log(variabel);
}

cetakVariabel<string>("Andi");
cetakVariabel<number>(1);

function addTimer(taskName: number): boolean {
  const success = false;
  console.log(`START  ${taskName} @${new Date(Date.now()).getTime()}`);
  if (success) {
    return true;
  }
  return false;
}

// type pResult = string | number;
const timerPromise: Promise<number> = new Promise(function (resolve, reject) {
  const taskName = 123;
  const result = addTimer(taskName);
  setTimeout(() => {
    if (result) return resolve(taskName);
    return reject(taskName);
  }, 200);
});

function createTimer(taskName: number, timer: number): Promise<number> {
  return new Promise(function (resolve, reject) {
    const result = addTimer(taskName);
    setTimeout(() => {
      if (result) return resolve(taskName);
      return reject(taskName);
    }, timer);
  });
}
