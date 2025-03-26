
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";

const publishableKey = "pk_test_Y3JlZGlibGUtZWZ0LTU0LmNsZXJrLmFjY291bnRzLmRldiQ";

function App() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Router>
        <AppRoutes />
      </Router>
    </ClerkProvider>
  );
}

export default App;