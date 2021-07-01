// concrete example
let number = [1, 2, 3, 4, 5, 6];
const a = summation(number, 9);
console.log(a);

function summation(arr, target) {
    let left = 0;
    let array = [];
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum == target) {
            array.push([left, right]);
            left++;
        }
        if (sum < target) {
            left++;
        }
        if (sum > target) {
            right--;
        }
    }

    return array;
}
