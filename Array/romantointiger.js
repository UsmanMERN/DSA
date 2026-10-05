let map = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000
}

let s = "mcmxciv"
let result = 0
for (let i = 0; i < s.length; i++) {
    s.toLocaleLowerCase()
    if (map[s[i]] < map[s[i + 1]]) {
        result -= Number(map[s[i]])
    } else {

        result += Number(map[s[i]])
    }
}
return result
console.log(result)
