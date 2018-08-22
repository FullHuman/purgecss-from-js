import fs from 'fs';
import PurgeFromJS from './index';

describe('PurgeFromJS', () => {
    const mockContent = `const list = document.getElementsByTagName('p \'kk \''); // get all p elements
    list.length; // show number of items
    list[0].style.color = \`red \$\{"list"\} \`;
    const a = 'b';`;

    it('test', () => {
        const selectors = PurgeFromJS.extract(mockContent);
        const t = 'hh'
        console.log(selectors);
        expect(4).toBe(4);
    });
});