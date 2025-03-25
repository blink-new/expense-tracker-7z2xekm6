
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Expense {
  id: string
  amount: number
  category: string
  description?: string
  date: string
}

interface ExpenseStore {
  expenses: Expense[]
  addExpense: (expense: Omit<Expense, 'id'>) => void
  deleteExpense: (id: string) => void
}

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (expense) =>
        set((state) => ({
          expenses: [
            ...state.expenses,
            { ...expense, id: crypto.randomUUID() }
          ]
        })),
      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id)
        }))
    }),
    {
      name: 'expense-storage'
    }
  )
)