//----------------------------- Buble sort -------------------------------

function BubleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let a = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = a;
            }
        }
    }
    return arr;

}

//console.log(BubleSort([1, 4, 2, 3, 6, 10, 9, 7, 8, 11, 5,11]));

//----------------------------- Selection sort -------------------------------

function SelectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let b = arr[i];
                arr[i] = arr[j]
                arr[j] = b;

            }
        }
    }

    return arr;
}

//console.log(SelectionSort([5, 6, 7, 8, 1, 2,]));

//----------------------------- Quick sort -------------------------------

function QuickSort(arr) {

    if (arr.length < 2) {
        return arr;
    } else {
        let a = arr.pop();
        let smaller = arr.filter(val => val < a);
        let bigger = arr.filter(val => val > a)

        return [...QuickSort(smaller), a, ...QuickSort(bigger)];
    }


}

//console.log(QuickSort([5, 6, 7, 8, 1, 2]));

//----------------------------- Binary search -------------------------------

let arr = [3, 6, 5, 7, 8, 1, 2]
let arr1 = arr.sort()

function BinarySearch(num, arr, start, end) {
    let medium = (start + end) / 2;
    if (num === arr[medium]) {
        return medium;
    } else if (num > arr[medium]) {
        return BinarySearch(num, arr1, medium + 1, end);
    } else {
        return BinarySearch(num, arr1, 0, medium - 1);
    }

}

//console.log(BinarySearch(1, arr1, 0, arr1.length - 1));

//----------------------------- linear search -------------------------------

function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }

    }

}

console.log(linearSearch(arr1, 8));