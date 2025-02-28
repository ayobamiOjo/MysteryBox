import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GradientBackground from '../components/GradientBackground';
import { AuthProvider,useAuth  } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

const MysteryDetailScreen = ({ route, navigation }) => {
  // Destructure the "mystery" object passed from the previous screen
  const { mystery } = route.params;

  // Local state for solves and comments
  const [solves, setSolves] = useState(mystery.solves);
  const [commentsCount, setCommentsCount] = useState(mystery.comments);

  // Local state for adding a new comment
  const [commentText, setCommentText] = useState('');

  // Example handler for “solve” button
  const handleSolve = () => {
    // For example, mark it solved or show a modal
    alert('Solve button clicked!');
  };

//   const navigation = useNavigation();
  const { isLoggedIn } = useAuth();
  // Example handler for adding a comment
  const handleAddComment = () => {
    if (!isLoggedIn) {
        // If user not logged in, go to login
        navigation.navigate('Login');
      } else {
        // If user is logged in, proceed
        // e.g. show comment form or call your comment API
        if (commentText.trim().length > 0) {
            // Increase comments count (just an example)
            setCommentsCount(commentsCount + 1);
      
            // Clear the input
            setCommentText('');
            // Possibly store or post the comment to your backend
          }
      }
   
  };
//   const handlePostComment = () => {
//     if (!isLoggedIn) {
//       // If user not logged in, go to login
//       navigation.navigate('Login');
//     } else {
//       // If user is logged in, proceed
//       // e.g. show comment form or call your comment API
//       alert('Posting comment...');
//     }
//   };
  return (
    <SafeAreaView style={styles.safeArea}>
      <GradientBackground>
        <Header />

        {/* Wrap content in a ScrollView if you expect it to scroll */}
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* Title */}
          <Text style={styles.title}>{mystery.title.toUpperCase()}</Text>

          {/* Mystery details */}
          <Text style={styles.details}>{mystery.details}</Text>

          {/* Placeholder for Mystery Image or Video */}
          {/* Replace this Image or add a Video component if needed */}
          <View style={styles.imagePlaceholder}>
            <Text style={{ color: '#aaa' }}>MYSTERY IMAGE OR VIDEO</Text>
          </View>

          {/* Solve / comment bar */}
          <View style={styles.solveContainer}>
            <TouchableOpacity onPress={() => setSolves(solves + 1)}>
              <FontAwesome5 name="arrow-up" size={16} color="#800080" />
            </TouchableOpacity>
            <Text style={styles.solveText}>{solves}</Text>
            <TouchableOpacity onPress={() => setSolves(solves - 1)}>
              <FontAwesome5 name="arrow-down" size={16} color="#800080" />
            </TouchableOpacity>

            {/* Comments count */}
            <FontAwesome
              name="comment"
              size={16}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <Text style={styles.solveText}>{commentsCount}</Text>

            {/* Solve button */}
            <FontAwesome5
              name="award"
              size={16}
              color="black"
              style={{ marginLeft: 10 }}
            />
            <TouchableOpacity onPress={handleSolve}>
              <Text style={styles.solveButton}>solve</Text>
            </TouchableOpacity>
          </View>

          {/* Add a comment */}
          <View style={styles.commentContainer}>
            <Text style={styles.commentTitle}>Add a comment</Text>
            <TextInput
              style={styles.commentInput}
              value={commentText}
              onChangeText={setCommentText}
              placeholder="Write your comment..."
            />
            <TouchableOpacity style={styles.commentButton} onPress={handleAddComment}>
              <Text style={styles.commentButtonText}>Post</Text>
            </TouchableOpacity>
          </View>

          {/* Example of displaying a comment */}
          <View style={styles.existingComment}>
            <Text style={styles.commentUser}>Username</Text>
            <Text style={styles.commentBody}>Comment details...</Text>
            <TouchableOpacity>
              <Text style={styles.reply}>Reply</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Footer />
      </GradientBackground>
    </SafeAreaView>
  );
};

export default MysteryDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  solveContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDA0DD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
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
  commentContainer: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  commentTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  commentButton: {
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  existingComment: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  commentUser: {
    fontWeight: 'bold',
  },
  commentBody: {
    marginVertical: 5,
  },
  reply: {
    color: 'blue',
    marginTop: 5,
  },
});
