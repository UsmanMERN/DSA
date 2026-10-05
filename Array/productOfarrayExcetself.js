let nums = [1, 2, 3, 4]




// var productExceptSelf = function (nums) {
//     let total = 1
//     let result = []
//     // nums.map((n) => total *= n)
//     nums.reduce((acc, curr) => total *= curr)
//     console.log(total)
//     for (let i = 0; i < nums.length; i++) {
//         result.push(total / nums[i])
//     }
//     return result
// }

// console.log(productExceptSelf(nums))


// let newArray = []
// for (let i = 0; i < nums.length; i++) {
//     let prefix = nums.slice(0, i).reduce((a, b) => a * b, 1)
//     let suffix = nums.slice(i + 1).reduce((a, b) => a * b, 1)
//     console.log(prefix * suffix)
//     newArray.push(prefix * suffix)
// }
// console.log(newArray)

let result = []

// Loop 1: LEFT se RIGHT (→)
let left = 1
for (let i = 0; i < nums.length; i++) {
    result[i] = left
    left = left * nums[i]
}

// Loop 2: RIGHT se LEFT (←)
let right = 1
for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * right
    right = right * nums[i]
}

console.log(result)