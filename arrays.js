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
    for(let i = 1; i <= array.length; i++) {
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
        if(index !== 0) {
            tempArray[index - 1] = element;
        }
    });
    
    array = tempArray;
    return array.length;
}

const biggerThan10 = (elem) => {
    if(typeof elem === 'number' && elem > 10){
        return true;
    }
    return false;
}

export function some(array, afunction) {
    let check = false;
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    array.forEach((elem, index) => {
        if(afunction(elem)){
            check = true;
        }
    });
    console.log(check);
    return check;
}


some([{age: 21},'2','3','4', 90], biggerThan10);