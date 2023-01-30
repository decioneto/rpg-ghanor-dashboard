import { AttributeNameEnum } from '@/enums/AttributesNameEnum';
import { CharacterSheets } from './characterSheets';

describe('CharacterSheet', () => {
    it('should be able to create a character sheer', () => {
        const characterSheet = new CharacterSheets({
            userId: 'qweqwe',
            chName: 'Olaf',
            charAttributes: [
                {
                    attribute: AttributeNameEnum.PV_LIST,
                    value: ['12', '14'],
                },
                {
                    attribute: AttributeNameEnum.PM_LIST,
                    value: ['3', '2'],
                },
                {
                    attribute: AttributeNameEnum.CH_RACE,
                    value: 'humano',
                },
                {
                    attribute: AttributeNameEnum.CH_CLASS,
                    value: 'cavaleiro',
                },
                {
                    attribute: AttributeNameEnum.CH_POWERS,
                    value: ['power 1', 'power 2'],
                },
                {
                    attribute: AttributeNameEnum.CH_ORIGIN,
                    value: 'escudeiro',
                },
                {
                    attribute: AttributeNameEnum.CH_MAGICS,
                    value: ['magic 1', 'magic 2'],
                },
                {
                    attribute: AttributeNameEnum.CH_ITEMS,
                    value: ['item 1', 'item 2'],
                },
                {
                    attribute: AttributeNameEnum.CH_EQUIPMENTS,
                    value: ['equip 1', 'equip 2'],
                },
                {
                    attribute: AttributeNameEnum.CH_BACKPACK,
                    value: ['item 1', 'item 2'],
                },
                {
                    attribute: AttributeNameEnum.CH_ATTRIBUTES,
                    value: ['attr 1', 'attr 2'],
                },
                {
                    attribute: AttributeNameEnum.CH_ATTACKS,
                    value: ['att 1', 'att 2'],
                },
                {
                    attribute: AttributeNameEnum.CH_ABILITIES,
                    value: ['ab 1', 'ab 2'],
                },
            ],
        });

        expect(characterSheet).toBeInstanceOf(CharacterSheets);
    });
});
