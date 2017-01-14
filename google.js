const lodash = require('lodash')
module.exports = {
    getSummands: (sum, list) => {
        'use strict';
        let current = 0;
        for(let i=list.length-1; i>=0; i--) {
            let iterSum = list[i] + list[current]
                console.log(iterSum, i, current)
            if (iterSum === sum) {
                return [list[i], list[current]]
            }

            if (iterSum < sum) {
                current++;
            }

            if (current === i) {
                break
            }

        }
        return []
    }
}
