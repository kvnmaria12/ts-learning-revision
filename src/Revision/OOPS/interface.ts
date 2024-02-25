interface Calendar {
  name: string;
  addEvent: () => void;
  removeEvent: () => void;
}

class GoogleCalendar implements Calendar {
  //   name: string;
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error('Method not Implemented');
  }
  removeEvent(): void {}
}
