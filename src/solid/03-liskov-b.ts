import { Car } from "./03-liskov-c";

export class Tesla extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Toyota extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Honda extends Car {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}
