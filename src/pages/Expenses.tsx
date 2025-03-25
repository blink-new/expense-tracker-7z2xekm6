
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function Expenses() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 150.00, date: '2024-02-19' },
    { id: 2, description: 'Internet Bill', amount: 89.99, date: '2024-02-18' },
  ])

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Expenses</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Expense
        </Button>
      </div>

      <div className="grid gap-4">
        {expenses.map((expense) => (
          <Card key={expense.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {expense.description}
              </CardTitle>
              <div className="text-sm font-bold">
                ${expense.amount.toFixed(2)}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {new Date(expense.date).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}