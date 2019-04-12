module.exports.binarySearch = (array, element) => {
    // verify if the array is not null and contains elements
    if (!array || !array.length) {
        return -1;
    }

    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        const middle = parseInt((start + end) / 2, 10);
        if (array[middle] === element) {
            return middle;
        }
        else if (array[middle] < element) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    // end condition: start === end
    if (start !== array.length && array[start] === element) return start

    // return -1 if the element does not exist
    return -1;
}