
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useExpenseStore } from "@/store/expenses"
import { formatCurrency } from "@/lib/utils"

export function ExpenseSummary() {
  const expenses = useExpenseStore((state) => state.expenses)

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount
    return acc
  }, {} as Record<string, number>)

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
            <p className="text-sm font-medium text-muted-foreground">
              Total Expenses
            </p>
            <p className="text-2xl font-bold">{formatCurrency(totalExpenses)}</p>
          </div>
          {topCategories.length > 0 && (
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Top Categories
              </p>
              <div className="space-y-2">
                {topCategories.map(([category, amount]) => (
                  <div
                    key={category}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{category}</span>
                    <span className="text-sm font-medium">
                      {formatCurrency(amount)}
                    </span>
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