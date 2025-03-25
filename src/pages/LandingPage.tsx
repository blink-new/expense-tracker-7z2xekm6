
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">ExpenseTracker</h1>
          <div className="flex items-center gap-4">
            <Link to="/sign-in" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Sign In
            </Link>
            <Link 
              to="/sign-up"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Track Your Expenses
            <span className="text-primary"> Effortlessly</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Take control of your finances with our powerful expense tracking solution.
            Simple, intuitive, and designed for modern professionals.
          </p>
          <Link
            to="/sign-up"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Everything you need to track expenses
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Easy Tracking",
                description: "Record expenses quickly with our intuitive interface"
              },
              {
                title: "Smart Analytics",
                description: "Get insights into your spending patterns"
              },
              {
                title: "Secure Cloud",
                description: "Your data is safely stored and always accessible"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Simple, transparent pricing
          </h2>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                features: [
                  "Up to 50 expenses/month",
                  "Basic analytics",
                  "CSV export",
                  "Email support"
                ]
              },
              {
                name: "Premium",
                price: "$9.99",
                features: [
                  "Unlimited expenses",
                  "Advanced analytics",
                  "Team collaboration",
                  "Priority support"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold mb-6 text-primary">
                  {plan.price}
                  <span className="text-sm text-gray-600 dark:text-gray-300">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/sign-up"
                  className="block w-full text-center px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-300">
          <p>© 2024 ExpenseTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}