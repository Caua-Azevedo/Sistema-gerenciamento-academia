import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'student' | 'teacher' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, userType: 'student' | 'teacher') => Promise<void>;
  register: (name: string, email: string, password: string, userType: 'student' | 'teacher') => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carregamento inicial do usuário do localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('ironpro_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, userType: 'student' | 'teacher') => {
    setIsLoading(true);
    try {
      // Simular chamada à API - em produção seria uma requisição real
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0],
        email,
        type: userType,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };
      
      setUser(newUser);
      localStorage.setItem('ironpro_user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, userType: 'student' | 'teacher') => {
    setIsLoading(true);
    try {
      // Simular chamada à API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        type: userType,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };
      
      setUser(newUser);
      localStorage.setItem('ironpro_user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Erro ao se registrar:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ironpro_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
