import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import GradientBackground from '../components/GradientBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext'; // ← your auth context

export default function CreateMysteryScreen() {
  // Check auth & navigate if not logged in
  const navigation = useNavigation();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.navigate('Login');
    }
  }, [isLoggedIn, navigation]);

  // Track which tab is active: 'text' or 'media'
  const [activeTab, setActiveTab] = useState('text');

  // For text tab
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // For media tab (example placeholders)
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);

  // Example handlers
  const handleSaveDraft = () => {
    alert('Draft saved!');
  };

  const handlePost = () => {
    alert('Mystery posted!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <GradientBackground>
        <Header />

        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.screenTitle}>Create Mystery</Text>

          {/* Tabs: Text | Images & Video */}
          <View style={styles.tabRow}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'text' && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab('text')}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'text' && styles.activeTabText,
                ]}
              >
                Text
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'media' && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab('media')}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  activeTab === 'media' && styles.activeTabText,
                ]}
              >
                Images & Video
              </Text>
            </TouchableOpacity>
          </View>

          {/* Text Tab */}
          {activeTab === 'text' && (
            <View style={styles.formContainer}>
              {/* Title */}
              <TextInput
                style={styles.input}
                placeholder="Title*"
                value={title}
                onChangeText={setTitle}
                maxLength={300}
              />
              <Text style={styles.counterText}>{title.length}/300</Text>

              {/* Body */}
              <TextInput
                style={[styles.input, styles.bodyInput]}
                placeholder="Body*"
                value={body}
                onChangeText={setBody}
                multiline
              />

              {/* Buttons */}
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.draftButton} onPress={handleSaveDraft}>
                  <Text style={styles.buttonText}>Save Draft</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postButton} onPress={handlePost}>
                  <Text style={styles.buttonText}>Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Media Tab */}
          {activeTab === 'media' && (
            <View style={styles.mediaContainer}>
              <TouchableOpacity style={styles.mediaButton}>
                <Text style={styles.mediaButtonText}>Add Image</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.mediaButton}>
                <Text style={styles.mediaButtonText}>Add Video</Text>
              </TouchableOpacity>

              {/* Example display of chosen images */}
              {images.length > 0 && (
                <View style={styles.previewContainer}>
                  {images.map((uri, index) => (
                    <Image key={index} source={{ uri }} style={styles.previewImage} />
                  ))}
                </View>
              )}

              {/* Example display of chosen video */}
              {video && (
                <Text style={styles.videoText}>Video selected: {video}</Text>
              )}
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
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#fff',
    alignSelf: 'center',
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 12,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
  },
  activeTabButton: {
    backgroundColor: '#fff',
  },
  tabButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#800080',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 6,
  },
  bodyInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  counterText: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  draftButton: {
    backgroundColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  postButton: {
    backgroundColor: '#800080',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mediaContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
  },
  mediaButton: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  mediaButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  previewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  previewImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    marginBottom: 10,
  },
  videoText: {
    marginTop: 10,
    color: '#000',
  },
});
