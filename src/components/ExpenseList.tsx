
import { useExpenseStore } from '../store/expenses';
import { motion } from 'framer-motion';

export function ExpenseList() {
  const { expenses, deleteExpense } = useExpenseStore();

  if (!expenses || expenses.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No expenses yet. Add your first expense above!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {expenses.map((expense, index) => (
        <motion.div
          key={expense.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center"
        >
          <div>
            <div className="font-medium">${expense.amount.toFixed(2)}</div>
            <div className="text-sm text-gray-600">{expense.category}</div>
            <div className="text-xs text-gray-500">
              {new Date(expense.date).toLocaleDateString()}
              {expense.description && ` • ${expense.description}`}
            </div>
          </div>
          <button
            onClick={() => deleteExpense(expense.id)}
            className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </button>
        </motion.div>
      ))}
    </div>
  );
}