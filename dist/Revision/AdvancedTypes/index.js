"use strict";
const mySize = {
    hip: 23,
    shoulder: 42,
    chest: 44,
    shouldMeasure: (size) => {
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
function myBirthYear(year) {
    if (typeof year == 'string') {
        return '1999';
    }
    return 1999;
}
const shoeSize = 'md';
const phoneInput = document.querySelector('input');
console.log(phoneInput.value);
const phoneInput2 = document.querySelector('input');
console.log(phoneInput2.value);
//# sourceMappingURL=index.js.map