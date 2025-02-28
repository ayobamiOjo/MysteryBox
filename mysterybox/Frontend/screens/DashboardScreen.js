import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GradientBackground from '../components/GradientBackground';

const mysteries = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  username: `User${i + 1}`,
  title: `Mystery Title ${i + 1}`,
  details: `Details of mystery ${i + 1}...`,
  solves: Math.floor(Math.random() * 10),
  comments: Math.floor(Math.random() * 5),
}));

const MysteryItem = ({ item, navigation }) => {
  const [solves, setSolves] = useState(item.solves);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={require('../Images/avater.png')} style={styles.avatar} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.details}>{item.details}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MysteryDetailScreen', { mystery: item })
        }
      >
        <Text style={styles.more}>more</Text>
      </TouchableOpacity>
      <View style={styles.solveContainer}>
        <TouchableOpacity onPress={() => setSolves(solves + 1)}>
          <FontAwesome5 name="arrow-up" size={16} color="#800080" />
        </TouchableOpacity>
        <Text style={styles.solveText}>{solves}</Text>
        <TouchableOpacity onPress={() => setSolves(solves - 1)}>
          <FontAwesome5 name="arrow-down" size={16} color="#800080" />
        </TouchableOpacity>
        <FontAwesome
          name="comment"
          size={16}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <Text style={styles.solveText}>{item.comments}</Text>
        <FontAwesome5
          name="award"
          size={16}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <TouchableOpacity>
          <Text style={styles.solveButton}>solve</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DashboardScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();

  // Optionally, switch to 1-column layout on very small screens:
  // const columns = width < 600 ? 1 : 2;
  const columns = 2;

  return (
    <SafeAreaView style={styles.safeArea}>
      <GradientBackground>
        <View style={styles.headerContainer}>
          <Header />
        </View>

        {Platform.OS === 'web' ? (
          <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollView}>
            {/* Main content container with same maxWidth */}
            <View style={styles.listContainer}>
              <FlatList
                data={mysteries}
                keyExtractor={(item) => item.id}
                numColumns={columns}
                columnWrapperStyle={styles.columnWrapper}
                renderItem={({ item }) => (
                  <MysteryItem item={item} navigation={navigation} />
                )}
                contentContainerStyle={styles.flatListContainer}
                showsVerticalScrollIndicator={true}
                // ListFooterComponent={<Footer />}
              />
            </View>
          </ScrollView>
        ) : (
          <View style={[styles.listContainer, { width: width - 16 }]}>
            <FlatList
              data={mysteries}
              keyExtractor={(item) => item.id}
              numColumns={columns}
              columnWrapperStyle={styles.columnWrapper}
              renderItem={({ item }) => (
                <MysteryItem item={item} navigation={navigation} />
              )}
              contentContainerStyle={styles.flatListContainer}
              showsVerticalScrollIndicator={true}
              // ListFooterComponent={<Footer />}
            />
          </View>
        )}
        <Footer />
      </GradientBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  listContainer: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 10, 
  },
  flatListContainer: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
  card: {
    flex: 1, 
    margin: 5, 
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 12,
    color: '#555',
  },
  more: {
    color: 'blue',
    marginTop: 5,
  },
  solveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#DDA0DD',
    borderRadius: 5,
  },
  solveText: {
    fontSize: 14,
    marginHorizontal: 5,
  },
  solveButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
});

export default DashboardScreen;
