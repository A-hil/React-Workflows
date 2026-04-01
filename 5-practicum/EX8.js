function createSumTracker() {
  let total = 0; 

  return {
    add(number) {
      total += number;
    },
    get() {
      return total;
    }
  };
}

const sumTracker = createSumTracker();
sumTracker.add(5);
sumTracker.add(10);
console.log(sumTracker.get());
sumTracker.add(20);
console.log(sumTracker.get());
