function quicksort(array) {
    const stack = [];
    stack.push({ left: 0, right: array.length - 1 });

    while (stack.length > 0) {
        const { left, right } = stack.pop();

        if (left < right) {
            const pivotIndex = partition(array, left, right);
            
            if (pivotIndex - 1 > left) {
                stack.push({ left, right: pivotIndex - 1 });
            }

            if (pivotIndex + 1 < right) {
                stack.push({ left: pivotIndex + 1, right });
            }
        }
    }

    return array;
}

function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

module.exports = { quicksort };
