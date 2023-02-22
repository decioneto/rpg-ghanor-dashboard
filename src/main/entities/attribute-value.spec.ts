import { AttributeValue } from './attribute-value';

describe('Attribute Value', () => {
    it('should be able to create a attribute value', () => {
        const attributeValue = new AttributeValue({
            attributeNameId: '123',
            value: 'barbaro',
        });

        expect(attributeValue).toBeInstanceOf(AttributeValue);
    });
});
