
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut } from '@clerk/clerk-react';
import { LandingPage } from './pages/LandingPage';
import { DashboardLayout } from './components/DashboardLayout';
import { ExpenseList } from './components/ExpenseList';
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseSummary } from './components/ExpenseSummary';

// Get your Clerk publishable key from environment variable
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Routes>
          <Route path="/" element={
            <SignedOut>
              <LandingPage />
            </SignedOut>
          } />
          
          <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
          
          <Route path="/dashboard" element={
            <SignedIn>
              <DashboardLayout />
            </SignedIn>
          }>
            <Route index element={
              <div className="space-y-8">
                <ExpenseSummary />
                <ExpenseForm />
                <ExpenseList />
              </div>
            } />
            <Route path="expenses" element={<ExpenseList />} />
            <Route path="analytics" element={<div>Analytics Coming Soon</div>} />
            <Route path="team" element={<div>Team Management Coming Soon</div>} />
            <Route path="settings" element={<div>Settings Coming Soon</div>} />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}