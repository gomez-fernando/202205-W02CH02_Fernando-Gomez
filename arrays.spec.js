import { length, pop, push, shift, unshift, some, every, find, filter} from './arrays.js';

const noIsArray = 'string';

const biggerThan10 = (elem) => {
    if (typeof elem === 'number' && elem > 10) {
        return true;
    }
    return false;
};

describe('Given length function', () => {
    describe('When array have 2 elements', () => {
        test('it should show the length of the array -> 2 ', () => {
            // ARRANGE

            const array = ['pepe', 2];
            const expectedResult = 2;
            // ACT

            const result = length(array);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => length(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given push function', () => {
    describe('When array have 2 elements', () => {
        test('it should show 3 elements', () => {
            // ARRANGE

            const array = ['pepe', 2];
            const element = 'pepa';
            const expectedResult = 3;
            // ACT
            const result = push(array, element);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => push(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given pop function', () => {
    describe('When array have 3 elements', () => {
        test('it should show the dropped element', () => {
            // ARRANGE

            const array = ['pepe', 2, 12];
            const expectedResult = 12;
            // ACT
            const ejecutar = pop(array);

            // ASSERT

            expect(ejecutar).toBe(expectedResult);
        });
    });

    describe('When array have 3 elements', () => {
        test("should show array's length -> 2 ", () => {
            // ARRANGE

            const array = ['pepe', 2, 12];
            const expectedResult = 2;
            // ACT
            pop(array);
            const result = array.length;

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => pop(noIsArray)).toThrow(
                'The given parameter is not an array'
            );
        });
    });
});

describe('Given shift function', () => {
    describe('When array have 3 elements', () => {
        test("should show array's length -> 4", () => {
            // ARRANGE

            const array = ['pepe', 2, 12];
            const expectedResult = 4;
            // ACT
            const result = shift(array, 'nuevo elemento');
            // const result = array.length;

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => shift(noIsArray)).toThrow(Error);
        });
    });
});
describe('Given unshift function', () => {
    describe('When array have 3 elements', () => {
        test("should show array's length -> 4", () => {
            // ARRANGE

            const array = ['pepe', 2, 12];
            const expectedResult = 2;
            // ACT
            const result = unshift(array);
            // const result = array.length;

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => unshift(noIsArray)).toThrow(Error);
        });
    });
});
describe('Given some function', () => {
    describe('When array have at least one element bigger than 10', () => {
        test('should return true', () => {
            // ARRANGE

            const array = ['pepe', 2, 2, 9];
            const expectedResult = false;
            // ACT
            const result = some(array, biggerThan10);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => some(noIsArray)).toThrow(Error);
        });
    });
});
describe('Given every function', () => {
    describe('When array have all the elements bigger than 10', () => {
        test('should return true', () => {
            // ARRANGE

            const array = [11, 16, 56, 900];
            const expectedResult = true;
            // ACT
            const result = every(array, biggerThan10);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => every(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given find function', () => {
    describe('When array have at least one element bigger than 10', () => {
        test('should return 56', () => {
            // ARRANGE

            const array = [0, 6, 56, 900];
            const expectedResult = 56;
            // ACT
            const result = find(array, biggerThan10);

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => find(noIsArray)).toThrow(Error);
        });
    });
});

describe('Given filter function', () => {
    describe('When array have at least one element bigger than 10', () => {
        test('should return new array with elements bigger than 10', () => {
            // ARRANGE

            const array = [1,20,3,4, 90];
            const expectedResult = '20,90';
            // ACT
            let result = filter(array, biggerThan10);
            result = result.toString();

            // ASSERT

            expect(result).toBe(expectedResult);
        });
    });
    describe('When no array is given', () => {
        test('it should return error ', () => {
            // ARRANGE

            // ACT

            // ASSERT
            expect(() => filter(noIsArray)).toThrow(Error);
        });
    });
});
