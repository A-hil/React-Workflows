import { 
  add as mathAdd, 
  subtract as mathSub, 
  multiply 
} from './mathUtils.js';

import { 
  add as arrayAdd, 
  subtract as arraySub 
} from './arrayUtils.js';

console.log("Сумма 5 и 3 равна:", mathAdd(5, 3));
console.log("Добавление элементов в массив :", arrayAdd([1, 2], 3));

console.log("Разность 10 и 4:", mathSub(10, 4));
console.log("Массив (удаление):", arraySub([1, 2, 3], 2));

console.log("Умножение 4 и 5 равно:", multiply(4, 5));