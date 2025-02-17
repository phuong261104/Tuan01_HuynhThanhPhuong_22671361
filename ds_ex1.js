const printForecast = (array) => {
    return array.reduce((acc, temp, index) => {
        return acc + `... ${temp}°C in ${index + 1} days `;
    }, "") + "...";
};
console.log(printForecast([17, 21, 23]));