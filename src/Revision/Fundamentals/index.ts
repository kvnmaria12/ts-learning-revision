// 1 any (never use any type)
let age: number;

age = 23;

const myInfo: string[] = [];

myInfo.push('kvn', 'daniel');

console.log(age);
console.log(myInfo);

// 2 tuple - array of fixed length

const myParents: [string, string] = ['daniel', 'viji'];

// 3enum
// pascal case
const enum ShirtSize {
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

const size: ShirtSize = ShirtSize.Medium;

function calculateAge(
  birthYear: number,
  currentYear: number,
  gender?: string
): number {
  console.log(gender);
  return currentYear - birthYear;
}

// interface is used to group a list of objects
interface myBio {
  id: number;
  name: string;
  age: number;
}

const myBio: { id: number; name: string; age: number } = {
  id: 1,
  name: 'Kevin',
  age: 23,
};

// using inteface
const myBio2: myBio = {
  id: 2,
  name: 'Kvn',
  age: 25,
};
