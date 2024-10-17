import React, { useState, useEffect } from 'react';
import styles from './TransactionHistory.module.css';

interface Transaction {
  _id: string;
  date: string;
  reseller: string;
  item: string;
  quantity: number;
  amount: number;
}

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions');
      const data = await response.json();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  return (
    <div className={styles.transactionHistory}>
      <h2>Transaction History</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Reseller</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.reseller}</td>
              <td>{transaction.item}</td>
              <td>{transaction.quantity}</td>
              <td>${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
