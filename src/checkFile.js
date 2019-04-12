const fs = require('fs');

module.exports.checkFile = (filePath) => {
    // check the filePath is not empty
    if (!filePath) {
        console.log('File path should not be empty or null');
        return 0;
    }

    // check the existance of the file
    const existedFile = fs.existsSync(filePath);

    if (!existedFile) {
        console.log('File does not exist');
        return 0; 
    }

    // File's size
    const stats = fs.statSync(filePath);
    const { size } = stats;

    // check if the file is not empty
    if (!size) {
        console.log('file is empty');
        return 0;
    }

    return 1;
}