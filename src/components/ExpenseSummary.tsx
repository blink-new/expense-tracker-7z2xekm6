
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useExpenseStore } from "@/store/expenses"
import { formatCurrency } from "@/lib/utils"

export function ExpenseSummary() {
  const expenses = useExpenseStore((state) => state.expenses)

  const totalExpenses = expenses?.reduce((acc, expense) => acc + expense.amount, 0) || 0

  const categoryTotals = expenses?.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount
    return acc
  }, {} as Record<string, number>) || {}

  const topCategories = Object.entries(categoryTotals)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Expense Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Total Expenses</h3>
            <p className="text-3xl font-bold text-emerald-600">
              {formatCurrency(totalExpenses)}
            </p>
          </div>
          
          {topCategories.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-2">Top Categories</h3>
              <div className="space-y-2">
                {topCategories.map(([category, amount]) => (
                  <div key={category} className="flex justify-between items-center">
                    <span className="text-gray-600">{category}</span>
                    <span className="font-medium">{formatCurrency(amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}