var calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

console.log(`Tip for a bill of 100: ${calcTip(100)}`);

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

var tips = bills.map(calcTip);

var total = bills.map((bill, index) => bill + tips[index]);

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);

const calcAverage = (array) => {
    if (array.length === 0) return 0;
    return array.reduce((acc, cur) => acc + cur, 0) / array.length;
}

console.log("Average: ", calcAverage(total));
