import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({ children }) => {
  return (
    <LinearGradient
      colors={["#CEC5C5", "#7E7878", "#6E6969", "#524E4E", "#262323"]} 
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }} // Diagonal effect
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

export default GradientBackground;
