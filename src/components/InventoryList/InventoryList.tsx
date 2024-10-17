import React, { useState, useEffect } from 'react';
import styles from './InventoryList.module.css';

interface InventoryItem {
  _id: string;
  name: string;
  quantity: number;
}

const InventoryList: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const response = await fetch('/api/inventory');
      const data = await response.json();
      setInventory(data);
    };
    fetchInventory();
  }, []);

  return (
    <div className={styles.inventoryList}>
      <h2>Inventory</h2>
      <ul className={styles.list}>
        {inventory.map((item) => (
          <li key={item._id} className={styles.item}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.quantity}>{item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;

