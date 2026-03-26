function sum(a, b) {
    return a + b;
}

function partial(fn, fixedValue) {
    return function(secondArg) {
        return fn(fixedValue, secondArg);
    };
}
// Тестирование
const addFive = partial(sum, 5);
console.log(addFive(10));