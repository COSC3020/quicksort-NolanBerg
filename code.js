function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];
    const left = [];
    const right = [];

    for (const element of array) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        }
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

module.exports = { quicksort };
