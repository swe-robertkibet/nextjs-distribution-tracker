export interface InventoryItem {
    _id: string;
    name: string;
    quantity: number;
  }
  
  export interface Reseller {
    _id: string;
    name: string;
    balance: number;
  }
  
  export interface Transaction {
    _id: string;
    date: Date;
    reseller: string | Reseller;
    item: string | InventoryItem;
    quantity: number;
    amount: number;
  }