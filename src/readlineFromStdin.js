const readline = require('readline');
const { binarySearch } = require('./binarySearch');


// create an interface
const rl = readline.createInterface({
    input: process.stdin, // readable Stream: stdin
});

let T;
let count = 0;
rl.on('line', (line) => {
    if (!T) {
        T = line
        return
    }
    count++
    if (count % 2) {
        [ N, element ] = line.split(' ').map(e => Number(e));
    }
    if (!(count % 2)) {
        const array = line.split(' ').map(e => Number(e));
        const fetchedIndex = binarySearch(array, element);
        console.log(`Case #${parseInt(count / 2, 10)}:`, fetchedIndex)
        
    }
    if (count >= 2 * T){
        rl.close();
    }
   
})
