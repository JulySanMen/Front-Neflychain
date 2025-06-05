import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';

import LoginPage from './components/auth/LoginPage';
import HomePage from './components/pages/HomePage';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { MovieProvider } from './contexts/MovieContext';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useContext(AuthContext);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <MovieProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/\" replace />} />
            </Routes>
          </Router>
        </MovieProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;