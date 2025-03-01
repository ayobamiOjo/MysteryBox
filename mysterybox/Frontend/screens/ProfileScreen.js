import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext'; 
import GradientBackground from '../components/GradientBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Example data
const user = {
  username: 'Username11',
  joinedDate: '15th October, 2024',
  totalSolved: 100,
  totalPosted: 40,
  rank: 5,
  avatar: require('../Images/avater.png'), 
};

// Example lists
const postedMysteries = [
  {
    id: '1',
    title: 'Title 1',
    details: 'mystery details...',
    comments: 5,
    upvotes: 3,
    downvotes: 1,
  },
  {
    id: '2',
    title: 'Title 2',
    details: 'mystery details...',
    comments: 2,
    upvotes: 4,
    downvotes: 1,
  },
  // Add more posted mysteries
];

const solvedMysteries = [
  {
    id: '1',
    title: 'Title 1',
    details: 'mystery details solved...',
    comments: 5,
    upvotes: 3,
    downvotes: 1,
  },
  {
    id: '2',
    title: 'Title 2',
    details: 'mystery details solved...',
    comments: 10,
    upvotes: 5,
    downvotes: 2,
  },
  // Add more solved mysteries
];

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { isLoggedIn } = useAuth(); // or however you track auth

  // Check if user is logged in; if not, navigate to Login
  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
  }, [isLoggedIn, navigation]);

  // Tabs: 'posted' or 'solved'
  const [activeTab, setActiveTab] = useState('posted');

  const renderMysteryItem = ({ item }) => (
    <View style={styles.mysteryCard}>
      <Text style={styles.mysteryTitle}>{item.title}</Text>
      <Text style={styles.mysteryDetails}>{item.details}</Text>
      <Text style={styles.mysteryComments}>{item.comments} comments</Text>
      <View style={styles.voteContainer}>
        <Text style={styles.voteText}>↑ {item.upvotes}</Text>
        <Text style={styles.voteText}>↓ {item.downvotes}</Text>
      </View>
    </View>
  );

  // Decide which data to show based on active tab
  const dataToShow = activeTab === 'posted' ? postedMysteries : solvedMysteries;

  return (
    <SafeAreaView style={styles.safeArea}>
      <GradientBackground>
        <Header />

        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.profileHeader}>
            <Image source={user.avatar} style={styles.avatar} />
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.joinDate}>Joined {user.joinedDate}</Text>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.totalSolved}</Text>
                <Text style={styles.statLabel}>Total Mysteries Solved</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.totalPosted}</Text>
                <Text style={styles.statLabel}>Total Mysteries Posted</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.rank}</Text>
                <Text style={styles.statLabel}>Rank on the Leaderboard</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Tabs: Mysteries Posted / Mysteries Solved */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'posted' && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab('posted')}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'posted' && styles.activeTabText,
                ]}
              >
                Mysteries Posted
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'solved' && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab('solved')}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'solved' && styles.activeTabText,
                ]}
              >
                Mysteries Solved
              </Text>
            </TouchableOpacity>
          </View>

          {/* List of mysteries */}
          <FlatList
            data={dataToShow}
            keyExtractor={(item) => item.id}
            renderItem={renderMysteryItem}
            contentContainerStyle={{ paddingBottom: 40 }}
          />

          
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
  },
  profileHeader: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
    elevation: 2,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  joinDate: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 15,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#800080',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // Tabs
  tabsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  tabButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTabButton: {
    backgroundColor: '#fff',
  },
  tabButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#800080',
  },
  mysteryCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    padding: 15,
    elevation: 1,
  },
  mysteryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  mysteryDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  mysteryComments: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  voteText: {
    marginRight: 15,
    fontSize: 14,
    fontWeight: '600',
  },
});
