import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../Images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.navLinks}>
        <Text style={styles.navLink}>Home</Text>
        <Text style={styles.navLink}>Leaderboard</Text>
        <Text style={styles.navLink}>Profile</Text>
        <Text style={styles.navLink}>Post Mystery</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#4A148C',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 100,
    height: 100,
  },
  navLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  navLink: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Header;