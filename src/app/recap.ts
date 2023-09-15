const username: string = 'nicobytes';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2);

class Person {

  constructor(public age: number, public lastname: string) {}
}

const marcos = new Person(23, 'Alonso');
