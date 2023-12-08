import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './sources/navigation/MainStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={s.container}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer >
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
