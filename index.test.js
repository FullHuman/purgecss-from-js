import fs from 'fs';
import PurgeFromJS from './index';

describe('PurgeFromJS', () => {
    const mockContent = `const list = document.getElementsByTagName('p\'kk\'');
    list.length;
    list[0].style.color = \`red\$\{"list"\} \`;
    const a = 'b';`;

    it('test', () => {
        const selectors = PurgeFromJS.extract(mockContent);
        const expected = ['list', 'document', 'getElementsByTagName', 'p', 'kk', ]
        const t = 'hh'
        console.log(selectors);
        expect(4).toBe(4);
    });
});