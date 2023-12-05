

// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './sources/screens/Home';
import HeaderView from './sources/components/HeaderView';
// import LoginView from './sources/screens/LogIn';

export default function App() {
  return (
    <SafeAreaView style={s.container}>
      <HeaderView />
      <Home />
      {/* <LoginView /> */}
    </SafeAreaView>

  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
