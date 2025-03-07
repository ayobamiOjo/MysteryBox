import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Image
        source={require('../Images/logo.png')}
        style={styles.logo}
      />
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('MainTabs')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Leaderboard')}>
          <Text style={styles.link}>Leaderboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.link}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreateMystery')}>
          <Text style={styles.link}>Post Mystery</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Image 
          source={require('../Images/Search.png')} 
          style={styles.searchIcon} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4B0082', // Purple background
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  link: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  searchIcon: {
    width: 25,
    height: 25,
    tintColor: 'gold', // Matches your search icon color
  },
});

export default Header;
