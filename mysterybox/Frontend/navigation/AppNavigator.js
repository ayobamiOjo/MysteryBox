import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import DashboardScreen from '../screens/DashboardScreen';
import MysteryDetailScreen from '../screens/MysteryDetailScreen';
import CreateMysteryScreen from '../screens/CreateMysteryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import Leaderboard from '../screens/LeaderboardScreen';
import SearchScreen from '../screens/SearchScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for main app features
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={DashboardScreen} />
      {/* <Tab.Screen name="CreateMystery" component={CreateMysteryScreen} /> */}
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
}

// Root Stack that includes MainTabs + MysteryDetailScreen
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* MainTabs is the "home" route */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="CreateMystery" component={CreateMysteryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgotPassword} />
        <Stack.Screen name="Search" component={SearchScreen} />
        {/* MysteryDetailScreen is a separate route in the same stack */}
        <Stack.Screen name="MysteryDetailScreen" component={MysteryDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
