let str1 = "abb"
let str2 = "bab"

// let map={}

// for(let i=0;i<str1.length;i++){
//     let char=str1[i]
//     if(char in map){
//         map[char]++
//     }
//     else{
//         map[char]=1
//     }
// }
// console.log(map)

// for(let i=0;i<str2.length;i++){
//     let char=str2[i]
//     if(char in map){
//         map[char]--
//     }
//     else{
//         map[char]=1
//     }
// }
// console.log(map)


// if (str1.length != str2.length) {
//     console.log("not valid anagram")
//     return false
// }

// for (let i = 0; i < str1.length; i++) {
//     let char = str1[i]
//     if (str2.includes(char)) {
//         str2 = str2.replace(char, "")
//     }
// }
// if (str2.length == 0) {
//     console.log("valid anagram")
// } else {
//     console.log("not valid anagram")
// }
// console.log(str2)


function isAnagram(str1, str2) {
    let map = {}
    if (str1.length != str2.length) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] in map) {
            map[str1[i]]++
        }
        else {
            map[str1[i]] = 1
        }
        if (str2[i] in map) {
            map[str2[i]]--
        }
        else {
            map[str2[i]] = -1  // ← yahan -1 hoga, kyunke str2 minus karta hai
        }
    }

    // Ab check karo ke saari values 0 hain ya nahi
    for (let key in map) {
        if (map[key] !== 0) {
            return false
        }
    }
    return true
}

console.log(isAnagram(str1, str2))