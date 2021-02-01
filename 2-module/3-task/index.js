let calculator = {
  read(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    let sum = this.a + this.b;
    return sum;
  },
  mul() {
    let mult = this.a * this.b;

    return mult;
  }
};

calculator.read(3, 5);
calculator.sum();
calculator.mul();

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
