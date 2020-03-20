import {total} from './App';


//Jest Documentation: https://jestjs.io/docs/en/getting-started.html

//Mock
const add = jest.fn(() => 3);
//Unit Test
test('add function', ()=> {
    const value = add(1,2);
    expect(value).toEqual(3);
    expect(add).toHaveBeenCalledTimes(1);
    expect(add).toHaveBeenCalledWith(1,2);
})

//Integration test
test('total function', ()=> {
    expect(total(5,20)).toBe('$25');
})

