class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    // in static method
    // this keyword points to the Class
    return this.activeRides;
  }
}

const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
console.log(Ride.activeRides);
