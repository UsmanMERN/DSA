let traget = 9
let nums = [15, 2, 7, 11]

// let map = {}

// for (let i = 0; i < nums.length; i++) {
//     let diff = traget - nums[i]

//     if (diff in map) {
//         console.log([map[diff], i])
//         break;
//     }
//     map[nums[i]] = i
// }

let sortedArray = [...nums].sort((a, b) => a - b)
