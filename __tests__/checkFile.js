const fs = require('fs');
const path = require('path');
const { checkFile } = require('../src/checkFile');


describe('checkFile', () => {
    beforeEach(() => {
        fs.readdir(__dirname, 'utf-8', (error, files) => {
        if (error) return error
        for (file of files) {
            if (path.extname(file) === '.txt') {
                return fs.unlink(path.join(__dirname, `./${file}`), (error)=> {
                    if (error) return error
                    return 1;
                })
            }
            return;
        }
        return;
    })
    })
    afterAll(() => {
        fs.readdir(__dirname, 'utf-8', (error, files) => {
            if (error) return error
            for (file of files) {
                if (path.extname(file) === '.txt') {
                    return fs.unlink(path.join(__dirname, `./${file}`), (error)=> {
                        if (error) return error
                        return 1;
                    })
                }
                return;
            }
            return;
    })

    })
    it('Should returns an error when the file path is empty', () => {
        expect(checkFile('')).toEqual(0);
    })

    it('Should returns an error when the file does not exists', () => {
        const filePath = 'test.txt';
        expect(checkFile(filePath)).toEqual(0);
    })

    it('Should returns 0 when the file is empty', () => {
        const filePath = path.join(__dirname, './test.txt');
        fs.writeFileSync(filePath, '', 'utf-8', 'w');
        expect(checkFile(filePath)).toEqual(0);
    })

    it('Should returns 1 when the file is full', () => {
        const filePath = path.join(__dirname, './test.txt');
        fs.writeFileSync(filePath, 'just for test', 'utf-8', 'w');
        expect(checkFile(filePath)).toEqual(1);
    })
})