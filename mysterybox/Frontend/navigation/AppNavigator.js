// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // Import Screens
// // import DashboardScreen from './screens/Dashboard';
// // import CreateMysteryScreen from './screens/CreateMystery';
// // import MysteryDetailsScreen from './screens/MysteryDetails';
// // import ProfileScreen from './screens/Profile';
// // import LoginScreen from './screens/Login';
// // import SignUpScreen from './screens/SignUp';
// // import ForgotPasswordScreen from './screens/ForgotPassword';

// import MysteryDetail from '../screens/MysteryDetailScreen'
// import LeaderboardScreen from '../screens/LeaderboardScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import PostMysteryScreen from '../screens/PostMysteryScreen';
// import DashboardScreen from '../screens/DashboardScreen';
// import HomeScreen from '../screens/HomeScreen';

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

// // Bottom Tabs
// const MainTabs = () => (
//   <Tab.Navigator screenOptions={({ route }) => ({
//       tabBarIcon: ({ color, size }) => {
//           let iconName;
//           if (route.name === 'Dashboard') iconName = 'home';
//           else if (route.name === 'Create Mystery') iconName = 'add-circle';
//           else if (route.name === 'Profile') iconName = 'person';
//           return <Ionicons name={iconName} size={size} color={color} />;
//       },
//       tabBarActiveTintColor: 'blue',
//       tabBarInactiveTintColor: 'gray',
//   })}>
//     <Tab.Screen name="Dashboard" component={DashboardScreen} />
//     <Tab.Screen name="Create Mystery" component={CreateMysteryScreen} />
//     <Tab.Screen name="Profile" component={ProfileScreen} />
//   </Tab.Navigator>
// );

// // Stack Navigation (Includes Auth)
// const AppNavigator = () => (
//   <NavigationContainer>
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="SignUp" component={SignUpScreen} />
//       <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//       <Stack.Screen name="MainTabs" component={MainTabs} />
//       <Stack.Screen name="MysteryDetails" component={MysteryDetailsScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default AppNavigator;


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import DashboardScreen from '../screens/DashboardScreen';
// import CreateMysteryScreen from '../screens/CreateMysteryScreen';
// import MysteryDetailScreen from '../screens/MysteryDetailScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import LoginScreen from '../screens/LoginScreen';
// import SignUpScreen from '../screens/SignUpScreen';
// import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs for Main App
const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={DashboardScreen} />
    <Tab.Screen name="Create Mystery" component={CreateMysteryScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

// Stack Navigation for Auth + Main App
const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      {/* <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="MysteryDetails" component={MysteryDetailScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
