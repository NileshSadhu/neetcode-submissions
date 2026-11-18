class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};

        for (let s of strs) {
            let result = s.split("").sort().join("");
            if (!obj[result]) {
                obj[result] = [];
            }
            obj[result].push(s);
        }
        return Object.values(obj);
    }
}
