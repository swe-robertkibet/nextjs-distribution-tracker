import React, { useState, useEffect } from 'react';
import styles from './ResellerList.module.css';

interface Reseller {
  _id: string;
  name: string;
  balance: number;
}

const ResellerList: React.FC = () => {
  const [resellers, setResellers] = useState<Reseller[]>([]);

  useEffect(() => {
    const fetchResellers = async () => {
      const response = await fetch('/api/resellers');
      const data = await response.json();
      setResellers(data);
    };
    fetchResellers();
  }, []);

  const handlePayment = async (resellerId: string, amount: number) => {
    const response = await fetch('/api/resellers/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resellerId, amount }),
    });
    if (response.ok) {
      // Refresh reseller list after successful payment
      const updatedResellers = await response.json();
      setResellers(updatedResellers);
    }
  };

  return (
    <div className={styles.resellerList}>
      <h2>Resellers</h2>
      <ul className={styles.list}>
        {resellers.map((reseller) => (
          <li key={reseller._id} className={styles.item}>
            <span className={styles.name}>{reseller.name}</span>
            <span className={styles.balance}>Balance: ${reseller.balance.toFixed(2)}</span>
            <input
              type="number"
              placeholder="Payment amount"
              className={styles.paymentInput}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const amount = parseFloat((e.target as HTMLInputElement).value);
                  handlePayment(reseller._id, amount);
                  (e.target as HTMLInputElement).value = '';
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResellerList;