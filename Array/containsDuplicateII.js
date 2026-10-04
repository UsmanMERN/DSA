// function containsNearbyDuplicate(nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j <= i + k && j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// let nums = [1, 2, 3, 1, 5, 3];
// let k = 4;
// console.log(containsNearbyDuplicate(nums, k)); // Output: true


// function containsNearbyDuplicate(nums, k) {
//     let map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i]) && (i - map.get(nums[i])) <= k) {
//             return true;
//         }
//         map.set(nums[i], i);
//     }
//     return false;
// }

// let nums = [1, 2, 3, 1, 5, 3];
// let k = 4;
// console.log(containsNearbyDuplicate(nums, k)); 

