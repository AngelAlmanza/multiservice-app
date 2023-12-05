import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import DropdownList from '../components/DropdownList';
import PayMethods from '../components/PayMethods';
import CalendarView from '../components/CalendarView';
import InputView from '../components/InputView';
// import CalendarView from '../components/CalendarView';

export default function HomeScreen() {
  const services = ['option1', 'option2', 'option3', 'option4'];
  return (

    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Request Service</Text>
      <DropdownList data={services} tittle="Services" />
      <CalendarView />
      <InputView text="Name" />
      <InputView text="Last name" />
      <PayMethods />

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
});
