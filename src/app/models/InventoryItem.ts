import ItemAttribute from "./InventoryAttribute"
export default class InventoryItem {
    appId = 440;
    contextId = 2;
    id = 0;
    originalId = 0;
    defindex = 0;
    level: any;
    quality = 0;
    remainingUses = 0;
    origin = 0;
    customName = '';
    customDescription = '';
    isNotCraftable!: boolean;
    isNotTradeable!: boolean;
    attributes!: ItemAttribute[];
    containedItem!: InventoryItem;
}