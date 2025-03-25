
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
}

export const useExpenseStore = create<ExpenseStore>()(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (expense) =>
        set((state) => ({
          expenses: [expense, ...state.expenses],
        })),
      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        })),
    }),
    {
      name: 'expense-storage',
    }
  )
);