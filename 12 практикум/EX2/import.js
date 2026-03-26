async function loadMath() {
  const math = await import('./main.js'); 
  console.log(math.default(5, 10)); 
  console.log(math.subtract(5, 10)); 
}

loadMath(); 
