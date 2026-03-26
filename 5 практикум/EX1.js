function createTimer() {
    let startTime = null;
    let isRunning = false;
    
    return {
        start: function() {
            if (isRunning) {
                console.log('Таймер уже запущен!');
                return;
            }
            startTime = Date.now();
            isRunning = true;
            console.log('Таймер запущен');
        },
        stop: function() {
            if (!isRunning) {
                console.log('Таймер не был запущен!');
                return 0;
            }
            const endTime = Date.now();
            isRunning = false;
            const elapsedSeconds = (endTime - startTime) / 1000;
            console.log(`Прошло: ${elapsedSeconds.toFixed(2)} секунд`);
            return elapsedSeconds;
        }
    };
}

console.log('\n=== Тестирование таймера ===');
const timer = createTimer();
timer.start();

setTimeout(() => {
    const seconds = timer.stop(); // Примерно 3
    console.log(`timer.stop() вернул: ${seconds.toFixed(2)}`);
}, 3000);