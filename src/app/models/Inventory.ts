import InventoryItem from './InventoryItem'

export default class Inventory {
    status!: ItemsStatus;
    numBackpackSlots!: 0;
    items!: InventoryItem[];
}

export enum ItemsStatus {
    Success = 1,
    SteamIdInvalidOrMissing = 8,
    BackpackIsPrivate = 15,
    SteamIdDoesntExist = 18
}