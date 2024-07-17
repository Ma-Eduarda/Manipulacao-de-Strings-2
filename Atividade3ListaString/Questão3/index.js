function sum(vetor) {
  let total = 0;
  for (let num of vetor) {
    total += num;
  }
  return total;
}

function sumOdds(vetor) {
  let total = 0;
  for (let num of vetor) {
    if (num % 2 === 1) {
      total += num;
    }
  }
  return total;
}

function product(vetor) {
  let result = 1;
  for (let num of vetor) {
    result *= num;
  }
  return result;
}

const vetor1 = [1, 2, 3];
const vetor2 = [2, 2, 2];
const vetor3 = [1, 2, 3, 4, 5, 6];

console.log("sum:", sum(vetor1));
console.log("sum:", sum(vetor2));
console.log("sum:", sum(vetor3));

console.log("sumOdds:", sumOdds(vetor1));
console.log("sumOdds:", sumOdds(vetor2));
console.log("sumOdds:", sumOdds(vetor3));

console.log("product:", product(vetor1));
console.log("product:", product(vetor2));
console.log("product:", product(vetor3));

