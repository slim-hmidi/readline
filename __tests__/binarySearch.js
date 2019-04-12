const { binarySearch } = require('../src/binarySearch');

describe('Binary Search function', () => {
    it('should returns -1 when an array is null', () => {
        const arr = null;
        const fetchedIndexElement = binarySearch(arr, 1);
        expect(fetchedIndexElement).toBe(-1);
    })

    it('should returns -1 when an array is empty', () => {
        const arr = [];
        const fetchedIndexElement = binarySearch(arr, 1);
        expect(fetchedIndexElement).toBe(-1);
    })

    it('should returns -1 when the array does not contain the element', () => {
        const arr = [1,2,3];
        const fetchedIndexElement = binarySearch(arr, 0);
        expect(fetchedIndexElement).toBe(-1);
    })

    it('should returns the index of the element in the array', () => {
        const arr = [1,2,3];
        const fetchedIndexElement = binarySearch(arr, 2);
        expect(fetchedIndexElement).toBe(1);
    })
})