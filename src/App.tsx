
import { Navigation } from './components/Navigation'
import { ExpenseForm } from './components/ExpenseForm'
import { ExpenseList } from './components/ExpenseList'
import { ExpenseSummary } from './components/ExpenseSummary'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          <ExpenseSummary />
          <ExpenseForm />
          <ExpenseList />
        </div>
      </main>
    </div>
  )
}