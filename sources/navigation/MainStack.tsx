import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen } from '../screens/SingUpScreen';
import { ReservationsScreen } from '../screens/ReservationsScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { MyProfileScreen } from '../screens/MyProfileScreen';
import { EditProfileScreen } from '../screens/EditProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

export type MainStackParamList = {
  SignUpScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  ReservationsScreen: undefined;
  MyProfileScreen: undefined;
  EditProfileScreen: undefined;
  NotificationsScreen: undefined;
}

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ReservationsScreen" component={ReservationsScreen} />
      <Stack.Screen name="MyProfileScreen" component={MyProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};
