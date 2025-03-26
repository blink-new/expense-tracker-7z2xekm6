
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App'
import './index.css'

const clerkPubKey = 'pk_test_Y3JlZGlibGUtZWZ0LTU0LmNsZXJrLmFjY291bnRzLmRldiQ'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <Toaster position="top-right" />
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)