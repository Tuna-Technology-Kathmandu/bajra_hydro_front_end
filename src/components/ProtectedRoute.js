import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../providers/AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;