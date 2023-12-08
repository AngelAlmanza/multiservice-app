

// import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderView from './sources/components/HeaderView';
import CalendarView from './sources/components/CalendarView';

export default function App() {
  return (
    <SafeAreaView style={s.container}>
      <HeaderView />
      <CalendarView />
    </SafeAreaView>

  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
