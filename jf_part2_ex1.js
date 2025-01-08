const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

var dolphinsAvg1 = calcAverage(44, 23, 71);
var koalasAvg1 = calcAverage(65, 54, 49);
console.log("Test Data 1:");
checkWinner(dolphinsAvg1, koalasAvg1);

var dolphinsAvg2 = calcAverage(85, 54, 41);
var koalasAvg2 = calcAverage(23, 34, 27);
console.log("\nTest Data 2:");
checkWinner(dolphinsAvg2, koalasAvg2);