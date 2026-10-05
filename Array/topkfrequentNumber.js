nums = [1, 1, 1, 2, 2, 3], k = 2

// let map = {}

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] in map) {
//         map[nums[i]]++
//     }
//     else {
//         map[nums[i]] = 1
//     }
// }
// let result = []
// for (let key in map) {
//     result.push(Number(key))
// }
// result.sort((a, b) => map[b] - map[a])
// return result.slice(0, k)
// console.log(result.slice(0, k))

var topKFrequent = function (nums, k) {
    let map = {};
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    // Min-Priority Queue: frequency ke hisaab se compare karega
    const minHeap = new MinPriorityQueue({
        priority: (item) => item.freq
    });

    for (let key in map) {
        minHeap.enqueue({ num: Number(key), freq: map[key] });

        // Agar heap ka size k se bada ho jaye, to sabse kam frequency wala element hata do
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    // Jo k elements bache hain unko result mein daal lein
    let result = [];
    while (!minHeap.isEmpty()) {
        result.push(minHeap.dequeue().element.num);
    }

    return result;
};
