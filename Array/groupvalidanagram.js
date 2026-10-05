let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let map = {}

// for (let i = 0; i < strs.length; i++) {
//     let sortedStr = strs[i].split("").sort().join("")
//     if (sortedStr in map) {
//         map[sortedStr].push(strs[i])
//     }
//     else {
//         map[sortedStr] = [strs[i]]
//     }
// }
// console.log(map)
// console.log(Object.values(map))

let map = {}

for (let i = 0; i < strs.length; i++) {
    let newArray = new Array(26).fill(0)
    for (let j = 0; j < strs[i].length; j++) {
        newArray[strs[i].charCodeAt(j) - 97]++
    }
    let sortedStr = newArray.join(",")

    if (sortedStr in map) {
        map[sortedStr].push(strs[i])
    }
    else {
        map[sortedStr] = [strs[i]]
    }
}
console.log(map)
console.log(Object.values(map))


