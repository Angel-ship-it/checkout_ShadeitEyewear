import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export function UserMenu() {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <div className="relative group">
      <User className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer" />
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
        {isAuthenticated ? (
          <>
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}