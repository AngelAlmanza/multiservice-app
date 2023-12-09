import React from 'react';
import { Text, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { DropdownList } from '../components/DropdownList';
import PayMethods from '../components/PayMethods';
import CalendarView from '../components/CalendarView';
import { Input } from '../components/Input';
import HeaderView from '../components/HeaderView';

export const HomeScreen = () => {
  const services = ['option1', 'option2', 'option3', 'option4'];
  return (

    <>
      <HeaderView />
      <ScrollView style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Request Service</Text>
        <DropdownList data={services} tittle="Services" />
        <CalendarView />
        <Input text="Name" />
        <Input text="Last name" />
        <PayMethods />
        <View style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total: $</Text>
          <Text>0000</Text>
        </View>
        <TouchableOpacity style={styles.reserve}>
          <Text style={{ fontSize: 20, color: '#fff' }}>
            Reserve
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
  },
  reserve: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    paddingVertical: 10,
    backgroundColor: '#017499',
    borderRadius: 8,
  },
});
