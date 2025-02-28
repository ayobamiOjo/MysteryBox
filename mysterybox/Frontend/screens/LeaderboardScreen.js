import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; // or 'react-native-linear-gradient'
import GradientBackground from '../components/GradientBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Sample data
const leaderboardData = [
  { rank: 1, username: 'Username11', solved: 23, points: 23 },
  { rank: 2, username: 'Username11', solved: 23, points: 23 },
  { rank: 3, username: 'Username11', solved: 23, points: 23 },
  { rank: 4, username: 'Username11', solved: 23, points: 23 },
  { rank: 5, username: 'Username11', solved: 23, points: 23 },
  { rank: 6, username: 'Username11', solved: 23, points: 23 },
  { rank: 7, username: 'Username11', solved: 23, points: 23 },
  { rank: 8, username: 'Username11', solved: 23, points: 23 },
];

export default function LeaderboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <GradientBackground>
        {/* Custom Header (if you already have a header with nav, you can omit this) */}
        <Header />

        {/* Main content scrollable */}
        <ScrollView contentContainerStyle={styles.container}>
          {/* "LEADER BOARD" title row with stars */}
          <View style={styles.titleRow}>
            <Image source={require('../Images/certificate.png')} style={styles.logo} />
            <Text style={styles.titleText}>LEADER BOARD</Text>
            <Image source={require('../Images/certificate.png')} style={styles.logo} />
          </View>

          {/* Table header row */}
          <View style={styles.tableHeader}>
            <Text style={[styles.headerText, { flex: 0.6 }]}>RANK</Text>
            <Text style={[styles.headerText, { flex: 2 }]}>USERNAME</Text>
            <Text style={[styles.headerText, { flex: 1.2 }]}>TOTAL SOLVED</Text>
            <Text style={[styles.headerText, { flex: 1 }]}>POINTS</Text>
          </View>

          {/* Gradient rows for each leaderboard entry */}
          {leaderboardData.map((item) => (
            <LinearGradient
              key={item.rank}
              // Adjust colors to match your desired gradient
              colors={['#FFC107', '#FFF176']}
              style={styles.tableRow}
            >
              {/* Rank (zero-padded to 2 digits) */}
              <Text style={[styles.rowText, { flex: 0.6 }]}>
                {String(item.rank).padStart(2, '0')}
              </Text>

              {/* Username */}
              <Text style={[styles.rowText, { flex: 2 }]}>
                {item.username}
              </Text>

              {/* Total Solved */}
              <Text style={[styles.rowText, { flex: 1.2 }]}>
                {item.solved}
              </Text>

              {/* Points + trophy icon */}
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.rowText, { marginRight: 5 }]}>
                  {item.points}
                </Text>
                {item.rank <= 3 && (
  <Image
    source={require('../Images/trophy_cup.png')}
    style={styles.trophyIcon}
  />
)}
              </View>
            </LinearGradient>
          ))}

          {/* Footer or additional spacing */}
          <Footer />
        </ScrollView>
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
    paddingBottom: 40, // Extra space for scrolling
  },
  // Title row with "LEADER BOARD" and star icons
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  titleIcon: {
    marginHorizontal: 5,
  },
  titleText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFF', // or another color if you prefer
  },
  // Table header row
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  headerText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Table row with gradient
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  rowText: {
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  //styles for images
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  //style for the trophy image
  trophyIcon:{
    width: 40,
    height: 40,
    resizeMode: 'contain',
  }
});
