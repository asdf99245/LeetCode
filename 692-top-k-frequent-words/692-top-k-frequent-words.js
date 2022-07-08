/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
    const cnt_map = new Map();
    words.forEach((word) => {
        if(!cnt_map.get(word)) cnt_map.set(word, 1);
        else cnt_map.set(word, cnt_map.get(word) + 1);
    })
    
    words = [...new Set(words)];
    
    words.sort();
    words.sort((a,b) => {
        const first = cnt_map.get(a), second = cnt_map.get(b);
        return second - first;
    })
    
    console.log(words);
    
    return words.slice(0, k);
};