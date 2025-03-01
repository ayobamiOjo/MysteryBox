import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView 
} from 'react-native';
import GradientBackground from '../components/GradientBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8082/search?term=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      console.log("Search results:", data);
      setResults(data);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <GradientBackground>
        <Header />
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Search</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter search term"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>

          {/* Optional: Display search results */}
          {results.length > 0 && (
            <View style={styles.resultsContainer}>
              {results.map((item, index) => (
                <View key={index} style={styles.resultItem}>
                  <Text>{item.title}</Text>
                </View>
              ))}
            </View>
          )}
        </ScrollView>
        <Footer />
      </GradientBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginTop: 20,
    width: '100%',
  },
  resultItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});