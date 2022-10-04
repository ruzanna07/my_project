let arr = [1, 5, 5, 7, 6, 5, 4, 5, 7, 8, 7, 7, 7, 8, 8, 6];

function theMostFrequentNumber(arr) {
    let maxNum = arr[0];
    let maxAmount = 0;

    for (let i = 0; i < arr.length; i++) {
        let amount = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                amount++;
            }
            if (maxAmount < amount) {
                maxAmount = amount;
                maxNum = arr[i];
            }
        }
    }
    return maxNum;
}

console.log(theMostFrequentNumber(arr));