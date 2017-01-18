/* jshint esnext:true */
/* jshint asi:true */

const lodash = require('lodash')
const getCounter = () => {
    'use strict';
    let count = 0;
    return {
        inc: () => {
            count++;
        },
        value: () => {
            return count;
        }
    }
}

const NlogN = (sum, list) => {
    'use strict';
    const counter = getCounter()
    const _iteration = (current, _list) => {
        counter.inc()
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
    const result = _outer(list)
    console.log(counter.value())
    return result
}

const N = (sum, list) => {
    'use strict';
    const counter = getCounter();
    const toggleTakeFns = {
        take: lodash.takeRight,
        takeRight: lodash.take
    }

    const _iteration = (_list, takeFn) => {
        counter.inc()
        if (lodash.isEmpty(_list)) {
            return _list
        }

        const interimSum = lodash.first(_list) + lodash.last(_list);
        if (interimSum < sum) { //turn take fn
            takeFn = toggleTakeFns[takeFn.name]
        }
        if (interimSum === sum) {
            return [lodash.first(_list), lodash.last(_list)]
        }
        return _iteration(takeFn(_list, _list.length-1), takeFn);
    }

    const result = _iteration (list, lodash.take)
    console.log(counter.value())
    return result
}

module.exports = {
    getSummands: N //NlogN
}
