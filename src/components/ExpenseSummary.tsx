
import { useExpenseStore } from '../store/expenseStore';
import { Card } from './ui/card';
import { formatCurrency } from '../lib/utils';
import { PieChart } from 'lucide-react';

export function ExpenseSummary() {
  const expenses = useExpenseStore(state => state.expenses);

  const totalExpenses = expenses?.reduce((sum, expense) => sum + expense.amount, 0) || 0;

  const categoryTotals = expenses?.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>) || {};

  const topCategories = Object.entries(categoryTotals)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Summary</h2>
        <PieChart className="w-5 h-5 text-emerald-500" />
      </div>
      
      <div>
        <p className="text-sm text-muted-foreground">Total Expenses</p>
        <p className="text-2xl font-bold text-emerald-600">
          {formatCurrency(totalExpenses)}
        </p>
      </div>

      {topCategories.length > 0 && (
        <div>
          <p className="text-sm text-muted-foreground mb-2">Top Categories</p>
          <div className="space-y-2">
            {topCategories.map(([category, amount]) => (
              <div key={category} className="flex justify-between items-center">
                <span className="text-sm capitalize">{category}</span>
                <span className="text-sm font-medium">{formatCurrency(amount)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}