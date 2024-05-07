"use strict";
console.log("Hello World");
function greeting(name) {
    console.log(`Hello ${name}`);
}
greeting("1");
// ts bisa mengetahui tipe data dari suatu variabel
// 1. type assertion
// 2. type inference
let hobbies = []; // type assertion
const fruits = ["watermelon", "melon", "apple"]; // type inference
let age; // type assertion
// age = "10";
hobbies.push("true");
// tuple => array yg sudah diketahui tipe data isinya,
// array terstruktur
// const tup = [1, "dua", true];
let rgb;
rgb = [1, 2, 3];
let tuple1;
let tuple2;
let tuple3;
tuple1 = [true, 1, 2, 3, 4, 5];
tuple2 = [1, "andi", "tono", 1];
tuple3 = ["anto", "rene", 1];
var genList;
(function (genList) {
    genList["male"] = "Male";
    genList["female"] = "Female";
})(genList || (genList = {}));
let gender = genList.male;
const addition = function (...bil) {
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
const printFullName = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};
const res = printFullName("andi");
const siswa = {
    name: "Nita",
    age: 20,
    address: "Jakarta",
};
const guru = {
    //   address: "Bandung",
    name: "Juki",
    age: 40,
    // isMarried: false,
};
class P {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getAddress() {
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
const dog = {
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
function animalSound(animal) {
    animal.getSound();
}
animalSound(dog);
animalSound(cat);
// Generic
function cetakVariabel(variabel) {
    console.log(variabel);
}
cetakVariabel("Andi");
cetakVariabel(1);
function addTimer(taskName) {
    const success = false;
    console.log(`START  ${taskName} @${new Date(Date.now()).getTime()}`);
    if (success) {
        return true;
    }
    return false;
}
// type pResult = string | number;
const timerPromise = new Promise(function (resolve, reject) {
    const taskName = 123;
    const result = addTimer(taskName);
    setTimeout(() => {
        if (result)
            return resolve(taskName);
        return reject(taskName);
    }, 200);
});
function createTimer(taskName, timer) {
    return new Promise(function (resolve, reject) {
        const result = addTimer(taskName);
        setTimeout(() => {
            if (result)
                return resolve(taskName);
            return reject(taskName);
        }, timer);
    });
}
