
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Toaster } from "@/components/ui/toaster";
import "./App.css";

const CLERK_PUBLISHABLE_KEY = 'pk_test_Y3JlZGlibGUtZWZ0LTU0LmNsZXJrLmFjY291bnRzLmRldiQ';

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Router>
        <AppRoutes />
        <Toaster />
      </Router>
    </ClerkProvider>
  );
}

export default App;