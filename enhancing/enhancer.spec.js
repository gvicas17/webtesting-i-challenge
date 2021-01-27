const enhancer = require('./enhancer.js');
// test away!

test('sanity', () => {
    expect(3).toBe(3)
    expect(3).not.toBe(4)
    expect(3).toBeGreaterThan(2)
})

describe('enhancer', () => {
    const item = {
        name: 'laptop',
        durability: 90, 
        enhancement: 18
      }
    it('exists', () => {
        expect(enhancer).toBeDefined
    })
    it('repairs item', () => {
        expect(enhancer.repair(item)).toHaveProperty('durability')
        expect(item.durability).toBe(100)
    })
    it('enhances item', () => {
        expect(enhancer.success(item)).toHaveProperty('enhancement')
        expect(item.enhancement).toBe(19)
    })
    it('fails', () =>{
        expect(enhancer.fail(item)).toHaveProperty('durability')
        expect(item.enhancement).toBe(18)
        expect(item.durability).toBe(90)
    } )
})