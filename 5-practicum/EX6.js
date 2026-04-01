function createSequence(start, step) {
  let current = start;

  return function() {
    const value = current; 
    current += step;      
    return value;
  };
}

const sequence = createSequence(10, 2);
console.log(sequence()); 
console.log(sequence()); 
console.log(sequence()); 
