const lodash = require('lodash')
module.exports = {
    getSummands: (sum, list) => {
        'use strict';
        const _iteration = (current, _list) => {
            if ((lodash.head(_list) + current) === sum) {
                return [current, lodash.head(_list)]
            }
            if (lodash.isEmpty(lodash.tail(_list))) {
                return []
            }
            return _iteration(current, lodash.tail(_list));
        }
        const _outer = (_list) => {
            const result = _iteration(lodash.head(_list), lodash.tail(_list))
            if (!lodash.isEmpty(result)) {
                return result
            }
            if (lodash.isEmpty(_list)) {
                return []
            }
            return _outer(lodash.tail(_list))
        }
        return _outer(list)
    }
}
