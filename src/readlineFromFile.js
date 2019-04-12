const fs = require('fs');
const path = require('path');
const { createInterface } = require('readline');
const { binarySearch } = require('./binarySearch');
const { checkFile } = require('./checkFile');

// file path
const filePath = path.join(__dirname, './testCase.txt')

// check the file
if (!checkFile(filePath)) {
    return;
}


// Creation of readline instance
const rl = createInterface({
  input: fs.createReadStream(filePath), // readable Stream: file
  crlfDelay: Infinity
});

let T;
let count = 0;
rl.on('line', (line) => {
    // read the first line value
    if (!T) {
        T = line
        return
    }
    count++
    // extract the array's length and the element to fetch from the second line
    if (count % 2) {
        [ N, element ] = line.split(' ').map(e => Number(e));
    }
    if (!(count % 2)) {
        const array = line.split(' ').map(e => Number(e));
        const fetchedIndex = binarySearch(array, element);
        console.log(`Case #${parseInt(count / 2, 10)}:`, fetchedIndex)
        
    }
    // close the interface if the number of lines exceeds T
    if (count >= 2 * T){
        rl.close();
    }
   
})
