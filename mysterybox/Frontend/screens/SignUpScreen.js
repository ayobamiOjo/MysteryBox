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
import { useNavigation } from '@react-navigation/native';

// If you have an AuthContext with a signup method, import it:
// import { useAuth } from '../context/AuthContext';

import GradientBackground from '../components/GradientBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignUpScreen() {
  const navigation = useNavigation();
  // const { signup } = useAuth(); // If using a signup method from context

  // Local state for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Example handler for the Sign Up button
  const handleSignUp = () => {
    // Basic validation
    if (!email || !password || !confirmPassword) {
      alert('Please fill out all fields.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // If you have a signup function, call it here:
    // signup(email, password);

    // Otherwise, do your own sign-up logic (e.g., call your backend)
    alert(`Signing up with email: ${email}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <GradientBackground>
        <Header />
        {/* KeyboardAvoidingView helps shift content up when the keyboard appears */}
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <Text style={styles.title}>SIGN UP</Text>

          {/* Email Field */}
          <Text style={styles.label}>Your Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {/* Password Field */}
          <Text style={styles.label}>Your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Confirm Password Field */}
          <Text style={styles.label}>Confirm Your Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Re-Enter your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Navigate to Login */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{ marginTop: 20 }}
          >
            <Text style={styles.linkText}>
              Have an account? <Text style={{ fontWeight: 'bold' }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <Footer />
      </GradientBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    // If you want a semi-transparent background box:
    // backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#fff', // or adjust to match your design
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#fff', // or adjust
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  signUpButton: {
    backgroundColor: '#800080',
    padding: 12,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#fff', // or adjust
    textAlign: 'center',
    fontSize: 14,
  },
});
