const { table } = require('console');
const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
    const arrayInteger = data.split(',').map(item => {
        if (isNaN(item) || item.length === 0) {
            console.error(`${item} no es un número`);
            return null;
        }
        return Number(item);
    }).filter(item => item !== null);
    const total = addPoints(arrayInteger);
    const result = {
        input: `[${data}]`,
        output: total
    }
    console.table(result);
})
/**
 * 
 * @param {number[]} data 
 */
function addPoints(data) {
    let total = 0;
    if (data.length === 0) return 0;

    for (const number of data) {
        switch (number) {
            case 5:
                total += 5;
            break;
            default:
                const numberType = number % 2;
                if (numberType === 0) {
                    total += 1;
                } else {
                    total += 3;
                }
            break;
        }
    }
    return total;
}