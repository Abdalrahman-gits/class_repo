export class Vehicle {
	constructor(color = "blue", numberofWheels = 4, horn = "beep beep") {
		this.color = color;
		this.numberofWheels = numberofWheels;
		this.horn = horn;
	}
	honkHorn() {
		console.log(this.horn);
	}
}
