import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>

      {/* Navigation Links */}
      <View style={styles.navContainer}>
      <Image source={require('../Images/logo.png')} style={styles.logo} />

{/* Navigation Links */}
        <View style={styles.navColumn}>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.link}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.link}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
            <Text style={styles.link}>Term of Service</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navColumn}>
          <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
            <Text style={styles.link}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
            <Text style={styles.link}>Leaderboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('CreateMystery')}>
            <Text style={styles.link}>Post Mystery</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navColumn}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.link}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Copyright Text */}
      <Text style={styles.copyright}>copyright © Mystery Box 2025</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#4B0082', // Purple background
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
    marginBottom: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 15,
  },
  navColumn: {
    alignItems: 'center',
  },
  link: {
    color: 'white',
    fontSize: 14,
    marginVertical: 5,
  },
  copyright: {
    color: 'white',
    fontSize: 12,
  },
});

export default Footer;
