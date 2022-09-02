function swap<T>(
    arr: T[],
    idx1: number,
    idx2: number,
    verbose: boolean = false
) {
    if (verbose) {
        console.log(`Old array: `, arr);
        console.log(
            `Swapping element of index: ${idx1} with element of index ${idx2}`
        );
    }
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    if (verbose) console.log(`New array: `, arr);
}

function bubbleSort(array: number[], verbose: boolean = false) {
    let noSwaps: boolean;
    for (let i = array.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1, verbose);
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }
    return array;
}

function bubbleSortDesc(array: number[], verbose: boolean = false) {
    let noSwaps: boolean;
    for (let i = array.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] < array[j + 1]) {
                swap(array, j, j + 1, verbose);
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }
    return array;
}

const arr1 = [6, 23, 64, 74, 12, 2345, 54, 11, 2, 0, -1];
// console.log(arr1);
// console.log(bubbleSort(arr1));
// console.log(bubbleSort([1, 2, 4, 6, 5, 9, 7], true));
// console.log(bubbleSortDesc([1, 2, 4, 6, 5, 9, 7], true));
// console.log(bubbleSort([1, 3, 7, 5, 4, 8, 6], true));
