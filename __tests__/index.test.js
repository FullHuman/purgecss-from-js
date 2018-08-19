import fs from 'fs';

describe('PurgeFromJS', () => {
    beforeAll(() => {
        fs.readFile(`${__dirname__}/mock-content.js`, (err, content)=> {
            
        });
    });

    it('test', () => {
        const s = 1+3;
        expect(s).toBe(4);
    });
});