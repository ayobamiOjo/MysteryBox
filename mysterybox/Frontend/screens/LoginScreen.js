// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import GradientBackground from '../components/GradientBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();

  // Default values: admin credentials
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleLogin = () => {
    login(email, password);
    // Navigate to MainTabs or wherever you want after successful login
    navigation.navigate('MainTabs');
  };

  return (
    <View style={{ flex: 1,}}>
       <GradientBackground>
       <Header />
       <View
       style={{ flex: 1,margin: 20,
        padding: 20,
        // If you want a semi-transparent background box:
        // backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 10}}
       >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>LOGIN</Text>

      <Text  
      >Your Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        style={{
          backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
        }}
      />

      <Text  >Your Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
        style={{
          backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
        }}
      />

      {/* Forgot Password Link */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ForgetPassword')}
        style={{ marginBottom: 20 }}
      >
        <Text style={{ color: 'blue' }}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: '#800080',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={{ marginTop: 20, color: 'blue' }}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
      </View>
      <Footer/>
      </GradientBackground>
    </View>
  );
}
