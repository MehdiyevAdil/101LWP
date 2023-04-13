let arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6];
let cut, tek;
let min = Infinity;
let max = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {

        if (arr[i] < min) {
            min = arr[i];
            console.log(i);
        }


    }

    if (arr[i] % 2 === 0) {
        if (max < arr[i]) {
            max = arr[i];
            console.log(i);
        }
    }

}
console.log("minumum", min, "maximum", max);
// [arr[1] ,arr[10]]=[arr[10],arr[1]];
arr[1] = max;
arr[10] = min;
console.log(arr)


