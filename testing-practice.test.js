const {hello} = require('./testing-practice.js');

test('return "hello world"', ()=> {
    expect(hello()).toBe('hello world');
});


