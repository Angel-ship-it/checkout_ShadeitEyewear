import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email, password) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      user: { id: '1', email, name: email.split('@')[0] },
      isAuthenticated: true,
    });
  },
  register: async (email, password, name) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      user: { id: '1', email, name },
      isAuthenticated: true,
    });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
}));