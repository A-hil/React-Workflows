function once(fn) {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      // Вызываем оригинальную функцию и сохраняем результат
      result = fn.apply(this, args);
      hasBeenCalled = true;
    }
    // Возвращаем сохраненный результат при всех последующих вызовах
    return result;
  };
}

// Тестирование:
const initialize = once(() => {
  console.log('Инициализация');
  return 'Готово';
});

const res1 = initialize(); // Инициализация
const res2 = initialize(); // (Ничего не выводит в консоль)

console.log(res1); // Готово
console.log(res2); // Готово
