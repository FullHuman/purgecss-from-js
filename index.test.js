import purgeFromJS from './index';

describe('PurgeFromJS', () => {
    const mockContent = `const list = document.getElementsByTagName('p'kk'');
    list.length;
    list[0].style.color = \`red ${'list'} \`;
    const a = 'b';`;

    it('contains all the selectors', () => {
        const selectors = purgeFromJS(mockContent);
        const expected = [
            'list',
            'document',
            'getElementsByTagName',
            'p',
            'kk',
            'length',
            'style',
            'color',
            'red',
            'a',
            'b',
        ];
        expect(selectors).toEqual(expected);
    });
});
