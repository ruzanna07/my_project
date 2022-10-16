function sumOfTwoNumbers(arr, target) {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[j] + arr[i]) === target) {
            return [j, i];
        } else if (i === arr.length - 1) {
            j++;
            i = 0;

        }

    }

}

console.log(sumOfTwoNumbers([1, 2, 3, 4, 5, 6], 4));

function AgainNum(arr1, arr2) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < arr1.length; i++) {
        a = a + arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        b = b + arr2[i];
    }
    return Math.abs(a-b);
}

console.log(AgainNum([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 5]));