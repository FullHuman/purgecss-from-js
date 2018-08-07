import * as esprima from 'esprima';
import fs from 'fs';
import path from 'path';

class PurgeFromJS {
    static extract(content) {
        const tokens = esprima.tokenize(content);
        const identifiers = tokens.filter((token) => {
            return token.type === 'Identifier';
        })
        const selectors = identifiers.map((identifier) => {
            return identifier.value;
        });
        return selectors;
    }
}
