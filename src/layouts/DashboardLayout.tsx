
import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { Menu, X, LayoutDashboard, Receipt, PieChart, Settings } from 'lucide-react';
import { cn } from '../lib/utils';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
    { icon: Receipt, label: 'Expenses', to: '/dashboard/expenses' },
    { icon: PieChart, label: 'Analytics', to: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', to: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar toggle */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-200 ease-in-out",
        "lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full px-3 py-4 flex flex-col">
          <div className="mb-8 px-4 pt-4">
            <h1 className="text-2xl font-bold text-primary">ExpenseTracker</h1>
          </div>
          
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn(
                  "flex items-center px-4 py-2 rounded-lg text-sm font-medium",
                  "transition-colors duration-150",
                  isActive 
                    ? "bg-primary text-white" 
                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto px-4 py-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className={cn(
        "transition-all duration-200 ease-in-out",
        "lg:ml-64"
      )}>
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}