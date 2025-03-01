import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import GradientBackground from '../components/GradientBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ForgetPasswordScreen() {
  const [identifier, setIdentifier] = useState('');

  const handleResetPassword = () => {
    if (!identifier.trim()) {
      alert('Please enter your email or username.');
      return;
    }
    alert(`Password reset link sent to: ${identifier}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <GradientBackground>
        <Header />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <Text style={styles.label}>Your Email or username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email or username"
            value={identifier}
            onChangeText={setIdentifier}
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
            <Text style={styles.resetButtonText}>Reset Password</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </GradientBackground>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff', 
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  resetButton: {
    backgroundColor: '#800080',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
