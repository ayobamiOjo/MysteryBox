import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GradientBackground from '../components/GradientBackground';

const mysteries = [
  { id: '1', title: 'Mysterious Light in the Sky', details: 'A strange light appeared...', solves: 3 },
  { id: '2', title: 'Lost Treasure', details: 'An old tale says a treasure...', solves: 5 },
];

const DashboardScreen = ({ navigation }) => (
 <GradientBackground>
    <Header />
    <FlatList 
      data={mysteries}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('MysteryDetailScreen', { mystery: item })}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.details}</Text>
          <Text style={styles.solves}>Solves: {item.solves}</Text>
        </TouchableOpacity>
      )}
    />
    <Footer />
  </GradientBackground>
);

const styles = StyleSheet.create({
  container: { 
    flex: 1,
     padding: 10, 
     backgroundColor: '#f9f9f9'
     },
  card: { 
    padding: 10,
     backgroundColor: '#fff',
      marginBottom: 10, 
      borderRadius: 5 
    },
  title: {
     fontSize: 18,
      fontWeight: 'bold'
     },
  solves: {
     color: 'blue',
      marginTop: 5 
    },
});

export default DashboardScreen;
