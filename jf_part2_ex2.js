var calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

console.log(`Tip for a bill of 100: ${calcTip(100)}`);

var bills = [125, 555, 44];

var tips = bills.map(calcTip);

var total = bills.map((bill, index) => bill + tips[index]);
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);