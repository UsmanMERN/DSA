// var findDuplicate = function (nums) {
//     let sortedArray = [...nums].sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         if (sortedArray[i] == sortedArray[i + 1]) {
//             return sortedArray[i];
//         }
//     }
// };


let nums = [3, 2, 5, 21, 2, 11, 19]

let map = {}

for (let i = 0; i < nums.length; i++) {
    let diff = nums[i]
    if (diff in map) {
        return nums[i]
    }
    map[diff] = i
}
