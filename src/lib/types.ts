
export interface Expense {
  id: string;
  amount: number;
  category: string;
  date: string;
  note?: string;
}

export const CATEGORIES = [
  'Food',
  'Transport',
  'Shopping',
  'Bills',
  'Entertainment',
  'Other'
] as const;

export type Category = typeof CATEGORIES[number];