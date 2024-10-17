export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  export const calculateBalance = (transactions: Transaction[]): number => {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
  };
  