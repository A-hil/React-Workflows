function memoizedFactorial() {
    let cache = {}; 
    function factorial(n) {
        if (n <= 1) return 1;
        if (cache[n]) {
            console.log(`Из кэша: factorial(${n}) = ${cache[n]}`);
            return cache[n];
        }
        console.log(`Вычисляем: factorial(${n})`);
        let result = n * factorial(n - 1);
        cache[n] = result;
        return result;
    }    
    return factorial;
}
const factorial = memoizedFactorial();
console.log('Первое вычисление factorial(5):');
console.log(factorial(5)); // 120
console.log('\nВторое вычисление factorial(5) из кеша:');
console.log(factorial(5)); // 120, быстрее