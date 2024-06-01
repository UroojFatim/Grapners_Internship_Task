import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const SettingsPage: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="max-w-2xl mx-auto mt-10 p-6 rounded shadow-lg dark:bg-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <button
          onClick={toggleTheme}
          className="mb-4 p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-4">Authentication</h2>
          {isAuthenticated ? (
            <>
              <p className="mb-4">You are logged in.</p>
              <button
                onClick={logout}
                className="p-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={login}
              className="p-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
