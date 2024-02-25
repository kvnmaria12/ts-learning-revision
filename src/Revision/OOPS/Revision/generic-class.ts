class KeyValueP {
  constructor(public key: number, public value: string) {}
}

//  to make the above class more generic with some contraint
class KeyValuePGeneric<K, V extends string | number> {
  constructor(public key: K, public value: V) {}
}

const keyValuePG = new KeyValuePGeneric(23, 'Kevin');
