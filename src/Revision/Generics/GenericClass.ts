class KeyValuePair {
  constructor(public key: string, public value: string) {}
}

const pair = new KeyValuePair('2', 'Kvn');

// Generic Class
class KeyValuePairGeneric<K, V> {
  constructor(public key: K, public value: V) {}
}

const pairG = new KeyValuePairGeneric<number, string>(12, 'Daniel');

// or

const pairG2 = new KeyValuePairGeneric(12, 'Viji');

class myAge<T> {
  constructor(public age: T) {}
}

const myAGe = new myAge(23);
