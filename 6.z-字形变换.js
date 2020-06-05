/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var arr = [];
    var columnsWithRows = Math.max(0, numRows - 2); //中间有多少排
    var countInGroup = numRows + columnsWithRows;//每一组有多少个
    var groupCount = Math.ceil(s.length / countInGroup);//有多少个组

    var group, indexInGroup, lineInGroup, indexInArr, i
    for(i = 0, length = s.length; i < length; i++) {
        group = Math.floor(i / (countInGroup));
        indexInGroup =  i % ((countInGroup));
        lineInGroup = indexInGroup < numRows ? indexInGroup : (numRows * 2 - 2 - indexInGroup);

        if (lineInGroup == 0) { //第一排的
            indexInArr = group;
        } else if (lineInGroup == columnsWithRows + 1) {//最后一排的
            indexInArr = groupCount + columnsWithRows * groupCount * 2 + group
        } else {
            // let line0 = groupCount;
            // let linesBefore = (groupCount * 2 * (lineInGroup - 1));
            // let groupsBefore = group * 2;
            // let selfPos = (indexInGroup < numRows) ? 0 : 1;
            indexInArr = groupCount + (groupCount * 2 * (lineInGroup - 1)) + (group * 2) + ((indexInGroup < numRows) ? 0 : 1);
        }
        // if (arr[indexInArr]) {
        //     console.log("REPEAT", i, indexInArr)
        // }

        arr[indexInArr] = s.charAt(i)

        // console.log(`${s.charAt(i)} i:${i} group: ${group} indexInGroup: ${indexInGroup} lineInGroup: ${lineInGroup} indexInArr: ${indexInArr} `);
        // if (s.charAt(i) != result.charAt(indexInArr)) {
        //     console.log("Error, i:", i, s.charAt(i), "result:", result.charAt(indexInArr), indexInArr)
        // }

    } 

    var str = "";
    for(i = 0; i < arr.length; i++) {
        if (arr[i]) {
            str += arr[i]
        }
    }
    return str;

};


// console.log(convert("LEETCODEISHIRING21", 4));

//PAHNAPLSIIG2YIR1
// console.log(convert("PAYPALISHIRING12", 3));
// console.log(convert("PAYPALISHIRING", 4));

/*

PAYPALISHIRING

P A H N
APLSIIG2
Y I R 1


P  I  N
A LS IG
YA HR
P  I


*/

// @lc code=end

