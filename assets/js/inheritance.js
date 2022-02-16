class Animal {

  constructor (age, gender) {
    this.age = age;
    this.gender = gender;
  }

  sleep(hours) {
    console.log('спит');
  }

  eat(food) {
    console.log('кушает', food);
  }

  static needsOxigen = true;
}

const animal = new Animal(1, 'female')





class Monkey extends Animal {

  /* constructor(...args) {
    super(...args);
  } */

  constructor(age, gender, hasFur) {
    super(age, gender); // this.age, this.gender

    this.hasFur = hasFur;
  }

  climb() {
    console.log('быстро лазает');
  }

  static feedMonkeys(monkeys, food) {
    for (let monk of monkeys) {
      monk.eat(food);
    }
  }
}

const monkey = new Monkey(4, 'male', true);

console.log(monkey);

monkey.climb()
monkey.eat('банан')





class Human extends Monkey {

  // замещение (override)
  climb() {
    console.log('медленно лазает');
  }

  count(N) {
    for (let index = 0; index < N; index++) {
      console.log(index);
    }
  }
}

const human = new Human()

human.count(4)
human.climb()


console.log(human);