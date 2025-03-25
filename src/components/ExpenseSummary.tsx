
import { Expense } from '../lib/types';
import { motion } from 'framer-motion';

interface ExpenseSummaryProps {
  expenses: Expense[];
}

export function ExpenseSummary({ expenses }: ExpenseSummaryProps) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  
  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {} as Record<string, number>);

  const sortedCategories = Object.entries(categoryTotals)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-emerald-50 p-6 rounded-xl border border-emerald-100"
    >
      <div className="text-2xl font-bold text-emerald-900">
        ${total.toFixed(2)}
      </div>
      <div className="text-sm text-emerald-700 mb-4">Total Expenses</div>

      {sortedCategories.length > 0 && (
        <div className="space-y-2">
          <div className="text-sm font-medium text-emerald-800">Top Categories:</div>
          {sortedCategories.map(([category, amount]) => (
            <div key={category} className="flex justify-between text-sm">
              <span className="text-emerald-700">{category}</span>
              <span className="font-medium">${amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}