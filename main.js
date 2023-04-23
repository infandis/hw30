class Human {
	constructor(name, age) {
  	this._name = name;
    this._age = age;
  }
  
  getName() { return this._name }
  getAge() { return this._age }
	setName(name) { this._name = name }
  setAge(age) { this._age = age }
	
  getInfo() {
  	console.log(`Name: ${this.getName()}, Age: ${this.getAge()}`);
  }
}

class Car {
	constructor(make, model, year, license) {
  	this._make = make;
    this._model = model;
    this._year = year;
    this._license = license;
  }
  
  getMake() { return this._make }
  getModel() { return this._model }
  getYear()  { return this._year }
  getlicense() { return this._license }
  getOwner() { return this._owner }
  setOwner(human) {
    if (!(human instanceof Human)) {
      console.error("human must be an instance of Human");
      return;
    }
    if (human.getAge() < 18) {
      console.error("owner must be at least 18 years old");
      return;      
    }
    this._owner = human;
  }

  getInfo() {
    console.log(`Make: ${this.getMake()}, model: ${this.getModel()}, year: ${this.getYear()}, license: ${this.getlicense()}`);
    this.getOwner().getInfo();
  }
}

let sveta = new Human("Sveta", 23);
let pasha = new Human("Pasha", 14);

let baby = new Car("Chevrolet", "Impala", 1967, "KAZ 2Y5");
let ecto = new Car("Cadillac", "Miller-Meteor", 1984, "ECTO-1");

baby.setOwner(sveta);
ecto.setOwner(pasha);