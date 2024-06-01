import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import TasksPage from './components/TasksPage';
import SettingsPage from './components/SettingsPage';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
            <nav className="mb-4">
              <Link to="/" className="mr-4 font-bold text-4xl hover:underline hover:text-blue-500 text-black">Products</Link>
              <Link to="/tasks" className="mr-4 font-bold text-4xl hover:underline hover:text-blue-500 text-black">Tasks</Link>
              <Link to="/settings" className="font-bold text-4xl hover:underline hover:text-blue-500 text-black">Settings</Link>
            </nav>
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
