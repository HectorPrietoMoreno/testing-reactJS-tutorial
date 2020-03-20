import {add, total} from './App';

//Unit Test
test('add function', ()=> {
    const value = add(1,2);
    expect(value).toEqual(3);
})

//Integration test
test('total function', ()=> {
    expect(total(5,20)).toBe('$25');
})