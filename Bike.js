import { Vehicle } from "./Vehicle.js";
export class Bike extends Vehicle {
	constructor(color, numberofWheels = 2, horn = "honk honk") {
		super(color, numberofWheels, horn);
	}
}
