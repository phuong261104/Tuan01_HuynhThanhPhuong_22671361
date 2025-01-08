function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}
  
let dolphinsAvg1 = calculateAverage(96, 108, 89);
let koalasAvg1 = calculateAverage(88, 91, 110);

console.log("Test Data 1:");
if (dolphinsAvg1 > koalasAvg1) {
  console.log(`Dolphins win: ${dolphinsAvg1.toFixed(1)}!`);
} else if (koalasAvg1 > dolphinsAvg1) {
  console.log(`Koalas win: ${koalasAvg1.toFixed(1)}!`);
} else if (dolphinsAvg1 === koalasAvg1) {
  console.log(`both teams scoring ${dolphinsAvg1.toFixed(1)}!`);
} else {
  console.log("No team wins");
}

let dolphinsAvgBonus1 = calculateAverage(97, 112, 101);
let koalasAvgBonus1 = calculateAverage(109, 95, 123);

console.log("\nBonus 1:");
if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
  console.log(`Dolphins win: ${dolphinsAvgBonus1.toFixed(1)}!`);
} else if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
  console.log(`Koalas win: ${koalasAvgBonus1.toFixed(1)}!`);
} else if (dolphinsAvgBonus1 === koalasAvgBonus1 && dolphinsAvgBonus1 >= 100 && koalasAvgBonus1 >= 100) {
  console.log(`both teams scoring ${dolphinsAvgBonus1.toFixed(1)}!`);
} else {
  console.log("No team wins");
}

let dolphinsAvgBonus2 = calculateAverage(97, 112, 101);
let koalasAvgBonus2 = calculateAverage(109, 95, 106);

console.log("\nBonus 2:");
if (dolphinsAvgBonus2 > koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {
  console.log(`Dolphins win: ${dolphinsAvgBonus2.toFixed(1)}!`);
} else if (koalasAvgBonus2 > dolphinsAvgBonus2 && koalasAvgBonus2 >= 100) {
  console.log(`Koalas win: ${koalasAvgBonus2.toFixed(1)}!`);
} else if (dolphinsAvgBonus2 === koalasAvgBonus2 && dolphinsAvgBonus2 >= 100 && koalasAvgBonus2 >= 100) {
  console.log(`both teams scoring ${dolphinsAvgBonus2.toFixed(1)}!`);
} else {
  console.log("No team wins");
}
  