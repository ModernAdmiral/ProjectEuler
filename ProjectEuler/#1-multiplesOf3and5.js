const multiplesOf3and5 = n => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count = count + i;
    }
  }
  return count;
};

console.log(multiplesOf3and5(1000));
console.log(multiplesOf3and5(49));
console.log(multiplesOf3and5(19564));
console.log(multiplesOf3and5(8456));
