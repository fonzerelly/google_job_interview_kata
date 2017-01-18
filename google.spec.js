const G = require('./google')
describe('google', () => {

    describe('when no two number are of given sum', () => {
        it('should return empty list', () => {
            expect(G.getSummands(8, [1,2,3,9])).toEqual([])
        })
    })

    describe('when two numbers are the given sum', () => {
        it('should return list of summands', () => {
            expect(G.getSummands(8, [1,2,4,4])).toEqual([4,4])
        })
    })

    describe('when two number are far separated', () => {
        it('should return list of summands', () => {
            expect(G.getSummands(8, [1,2,7,8])).toEqual([1,7])
        })
    })

})
