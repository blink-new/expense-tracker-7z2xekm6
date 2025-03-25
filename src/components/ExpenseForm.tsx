
import { useState } from 'react';
import { CATEGORIES } from '../lib/types';
import { cn } from '../lib/utils';

interface ExpenseFormProps {
  onSubmit: (data: { amount: number; category: string; date: string; note?: string }) => void;
}

export function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !date) return;
    
    onSubmit({
      amount: parseFloat(amount),
      category,
      date,
      note: note || undefined,
    });

    setAmount('');
    setCategory(CATEGORIES[0]);
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="0.00"
          required
          step="0.01"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Note (Optional)</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          placeholder="Add a note"
        />
      </div>

      <button
        type="submit"
        className={cn(
          "w-full py-2 px-4 rounded-lg bg-emerald-600 text-white font-medium",
          "hover:bg-emerald-700 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500",
          "transition-colors duration-200"
        )}
      >
        Add Expense
      </button>
    </form>
  );
}