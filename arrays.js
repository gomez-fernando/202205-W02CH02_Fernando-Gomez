export function length(array) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    return array.length;
}
export function push(array, element) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    array[array.length] = element;
    return array.length;
}
export function pop(array) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    const element = array[array.length - 1];
    array.length = array.length - 1;
    return element;
}
export function shift(array, elem) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    const newArray = [elem];
    for (let i = 1; i <= array.length; i++) {
        newArray[i] = array[i - 1];
    }
    array = newArray;
    return array.length;
}
export function unshift(array) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    const tempArray = [];
    array.forEach((element, index) => {
        if (index !== 0) {
            tempArray[index - 1] = element;
        }
    });

    array = tempArray;
    return array.length;
}

const biggerThan10 = (elem) => {
    if (typeof elem === 'number' && elem > 10) {
        return true;
    }
    return false;
};

export function some(array, afunction) {
    let check = false;
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    array.forEach((elem) => {
        if (afunction(elem)) {
            check = true;
        }
    });
    console.log(check);
    return check;
}

export function every(array, afunction) {
    let check = false;
    let counter = 0;
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    array.forEach((elem) => {
        if (afunction(elem)) {
            counter++;
        }
    });
    if (counter === array.length) {
        check = true;
    }
    console.log(check);
    return check;
}

export function find(array, afunction) {
    let check;
    let finded;
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    array.forEach((elem, index) => {
        if (afunction(elem)) {
            array.length = index;
            finded = elem
        }
        if (check) {
            console.log('linea 99' + elem);
            return elem;
        }
    });
    if(finded !== undefined){
        console.log(finded);
        console.log(check);
        return finded
    }else return check
}

export function filter(array, afunction) {
    const finded = []
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    array.forEach((elem, index) => {
        if (afunction(elem)) {
            push(finded, elem)
        }
    });
    console.log(finded);
    return finded;
}


const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(equals([ 1,20, 3,4, 90], [ 1,20,3,4, 90]));
