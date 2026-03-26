
console.log('Задача 1: Объект с двумя методами');

const person = {
    name: 'Анна',
    age: 25,

    regularMethod: function() {
        console.log(`Обычная функция: Имя - ${this.name}, Возраст - ${this.age}`);
    },

    arrowMethod: () => {
        console.log(`Стрелочная функция: Имя - ${this.name}, Возраст - ${this.age}`);

    }
};

person.regularMethod(); 
person.arrowMethod();   

console.log('\nЗадача 2: Лексическая область видимости ');

const globalVar = 'Я глобальная переменная';

function showScopes() {
    const localVar = 'Я локальная переменная';
    
    if (true) {
        let blockVar = 'Я блочная переменная (let)';
        console.log('Внутри блока:');
        console.log('- ' + globalVar);
        console.log('- ' + localVar);
        console.log('- ' + blockVar);
    }
    
    console.log('Внутри функции (вне блока):');
    console.log('- ' + globalVar);
    console.log('- ' + localVar);
}

showScopes();

console.log('\nЗадача 3: let vs var в setTimeout ');

console.log('С var (через 1 секунду):');
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(`var: i = ${i}`); 
    }, 1000);
}

console.log('С let (через 2 секунды):');
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(`let: j = ${j}`); 
    }, 2000);
}

console.log('Готово! Смотрите консоль через 1 и 2 секунды.');