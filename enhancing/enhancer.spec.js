const enhancer = require('./enhancer.js');
// test away!

test('sanity', () => {
    expect(3).toBe(3)
    expect(3).not.toBe(4)
    expect(3).toBeGreaterThan(2)
})