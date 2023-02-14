import { AttributeName } from './attributeName';

describe('Attribute Name', () => {
    it('should be able to create a attribute name', () => {
        const attributeName = new AttributeName({
            name: 'class',
        });

        expect(attributeName).toBeInstanceOf(AttributeName);
    });
});
