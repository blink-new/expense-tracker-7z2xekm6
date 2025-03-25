
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wallet, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const mockData = [
  { name: 'Jan', amount: 1200 },
  { name: 'Feb', amount: 900 },
  { name: 'Mar', amount: 1500 },
  { name: 'Apr', amount: 1100 },
  { name: 'May', amount: 1800 },
  { name: 'Jun', amount: 1300 },
];

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalExpenses: 0,
    monthlyChange: 0,
    averageExpense: 0,
    largestExpense: 0,
  });

  useEffect(() => {
    // In a real app, this would fetch from your API
    setStats({
      totalExpenses: 7800,
      monthlyChange: 15.6,
      averageExpense: 1300,
      largestExpense: 1800,
    });
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Dashboard Overview
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Expenses"
          value={`$${stats.totalExpenses.toLocaleString()}`}
          icon={Wallet}
          trend="neutral"
        />
        <StatCard
          title="Monthly Change"
          value={`${stats.monthlyChange}%`}
          icon={stats.monthlyChange >= 0 ? TrendingUp : TrendingDown}
          trend={stats.monthlyChange >= 0 ? "up" : "down"}
        />
        <StatCard
          title="Average Expense"
          value={`$${stats.averageExpense.toLocaleString()}`}
          icon={DollarSign}
          trend="neutral"
        />
        <StatCard
          title="Largest Expense"
          value={`$${stats.largestExpense.toLocaleString()}`}
          icon={TrendingUp}
          trend="neutral"
        />
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Expense Trend
        </h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[
            { description: "Grocery Shopping", amount: 120, date: "Today" },
            { description: "Netflix Subscription", amount: 15, date: "Yesterday" },
            { description: "Gas Station", amount: 45, date: "2 days ago" },
          ].map((activity, index) => (
            <div 
              key={index}
              className="flex items-center justify-between py-3 border-b last:border-0 border-gray-200 dark:border-gray-700"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {activity.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {activity.date}
                </p>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                ${activity.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend 
}: { 
  title: string; 
  value: string; 
  icon: any; 
  trend: 'up' | 'down' | 'neutral';
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <Icon className={`h-6 w-6 ${
          trend === 'up' ? 'text-green-500' :
          trend === 'down' ? 'text-red-500' :
          'text-primary'
        }`} />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
    </div>
  );
}