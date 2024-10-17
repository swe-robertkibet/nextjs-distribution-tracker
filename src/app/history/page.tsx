import TransactionHistory from '@/components/TransactionHistory/TransactionHistory'

export default function HistoryPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Transaction History</h1>
      <TransactionHistory />
    </div>
  )
}