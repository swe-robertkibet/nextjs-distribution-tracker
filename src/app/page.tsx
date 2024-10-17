import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to Stock Management SPA</h1>
      <nav className="space-y-4">
        <Link href="/inventory" className="block text-blue-500 hover:underline">
          View Inventory
        </Link>
        <Link href="/resellers" className="block text-blue-500 hover:underline">
          Manage Resellers
        </Link>
        <Link href="/history" className="block text-blue-500 hover:underline">
          Transaction History
        </Link>
      </nav>
    </div>
  )
}