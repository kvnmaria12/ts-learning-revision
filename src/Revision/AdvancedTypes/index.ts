//  Advanced Types

interface CustomerInfo {
  id: number;
  name: string;
  size: string;
}

// 1 Type Alias
type BodySize = {
  hip: number;
  shoulder: number;
  chest: number;
  shouldMeasure: (size: string) => boolean;
  info: CustomerInfo[];
};

const mySize: BodySize = {
  hip: 23,
  shoulder: 42,
  chest: 44,
  shouldMeasure: (size: string) => {
    if (size) {
      return true;
    }
    return false;
  },
  info: [
    {
      id: 12,
      name: 'Kvn',
      size: 'md',
    },
    {
      id: 33,
      name: 'Daniel',
      size: 'sm',
    },
    {
      id: 44,
      name: 'Viji',
      size: 'lg',
    },
  ],
};

// 2 Union Types
function myBirthYear(year: string | number): number | string {
  if (typeof year == 'string') {
    return '1999';
  }
  return 1999;
}

// 2. Literal Type

type ShoeSize = 'sm' | 'md';
const shoeSize: ShoeSize = 'md';

// 3 Type Assertion
const phoneInput = document.querySelector('input') as HTMLInputElement;
console.log(phoneInput.value);
//  or easy way

const phoneInput2 = <HTMLInputElement>document.querySelector('input');
console.log(phoneInput2.value);
