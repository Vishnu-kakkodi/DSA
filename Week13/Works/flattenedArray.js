function flattened(array) {
    let flattenedArray = [];
    array.forEach(element => {
        if (Array.isArray(element)) {
            flattenedArray = flattenedArray.concat(flattened(element));
        } else {
            flattenedArray.push(element);
        }
    });
    return flattenedArray;
}

let array = [1, 2, 3, [4, 5, [6, 7], 8], 9];
console.log(flattened(array));