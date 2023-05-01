// 1. Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const arrMixed = ["3", 2, "2", 1];

function cleanRoom(arr) {
    const sortedArr = arr.sort(function (a, b) { return a - b });
    let arr2 = [];
    let arr3 = [];
    let checkNum = 0;
    for (let i = 0; i < sortedArr.length; i++) {
        if (checkNum === 0) {
            checkNum = sortedArr[i];
            arr3.push(sortedArr[i]);
        } else if (checkNum === sortedArr[i]) {
            arr3.push(sortedArr[i]);
        } else if (checkNum !== sortedArr[i]) {
            arr2.push(arr3);
            checkNum = sortedArr[i];
            arr3 = [];
            arr3.push(sortedArr[i]);
        }
        if (i === sortedArr.length - 1) {
            arr2.push(arr3);
            arr3 = [];
        }
    }

    for (item of arr2) {
        if (item.length === 1) {
            arr3.push(item[0]);
        } else {
            arr3.push(item);
        }
    }
    return arr3;
}

function filterRoom(arr) {
    const numArr = arr.filter((e) => typeof (e) == 'number');
    const strArr = arr.filter((e) => typeof (e) == 'string');
    return [numArr, strArr];
}

console.log(cleanRoom(arr));
const mixArr = cleanRoom(arrMixed);
console.log(filterRoom(mixArr));