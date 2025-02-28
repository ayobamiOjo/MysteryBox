// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import MysteryDetail from './Frontend/screens/MysteryDetailScreen'
// import LeaderboardScreen from './Frontend/screens/LeaderboardScreen';
// import ProfileScreen from './Frontend/screens/ProfileScreen';
// import PostMysteryScreen from './Frontend/screens/PostMysteryScreen';
// import DashboardScreen from './Frontend/screens/DashboardScreen';
// import HomeScreen from './Frontend/screens/HomeScreen';

// const Stack = createStackNavigator();
// export default function App() {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="MysteryDetail" component={MysteryDetailScreen} />
//     <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
//     <Stack.Screen name="Profile" component={ProfileScreen} />
//     <Stack.Screen name="PostMystery" component={PostMysteryScreen} />
//     <Stack.Screen name="Dashboard" component={DashboardScreen} />
//   </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './Frontend/navigation/AppNavigator';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }
import React from 'react';
import AppNavigator from './Frontend/navigation/AppNavigator';
import { AuthProvider } from './Frontend/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
