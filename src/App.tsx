
import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { AppRoutes } from './routes';
import { Toaster } from './components/ui/toaster';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <AppRoutes />
        <Toaster />
      </Router>
    </ClerkProvider>
  );
}

export default App;