import { Vehicle } from "./Vehicle.js";
import { Bike } from "./Bike.js";
console.log(`For the Car !!!!!`);
let mycar = new Vehicle("red", 4, "sayeaa sayeaa");
console.log(mycar.color);
console.log(mycar.numberofWheels);
mycar.honkHorn();

console.log("######################################");

console.log(`For the Bike !!!!!`);
let mybike = new Bike("Green", 2, "waio waio");
console.log(mybike.color);
console.log(mybike.numberofWheels);
mybike.honkHorn();
