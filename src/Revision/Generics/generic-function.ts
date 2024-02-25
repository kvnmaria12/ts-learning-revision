// generic function
function printAge<T>(age: T): T {
  return age;
}

printAge(23);
// or calling the generic argument
printAge<number>(23);

// Generic Function
function printCurrentYear<T extends number | string>(name: T): T {
  return name;
}

// calling the function
printCurrentYear<string>('2023');
