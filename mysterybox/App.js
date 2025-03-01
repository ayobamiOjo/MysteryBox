import React from 'react';
import AppNavigator from './Frontend/navigation/AppNavigator';
import { AuthProvider } from './Frontend/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
