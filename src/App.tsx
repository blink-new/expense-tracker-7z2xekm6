
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { ExpenseSummary } from './components/ExpenseSummary';
import { useExpenseStore } from './lib/store';

function App() {
  const { expenses, addExpense, deleteExpense } = useExpenseStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Expense Tracker</h1>
        
        <div className="space-y-6">
          <ExpenseSummary expenses={expenses} />
          
          <div className="bg-white p-6 rounded-xl border">
            <h2 className="text-xl font-semibold mb-4">Add New Expense</h2>
            <ExpenseForm onSubmit={addExpense} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
            <ExpenseList expenses={expenses} onDelete={deleteExpense} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;