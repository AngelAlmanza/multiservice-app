import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Panel from '../components/Panel';
import HeaderView from '../components/HeaderView';


export default function NotificationsScreen() {
  return (
    <>
      <HeaderView />
      <ScrollView style={s.container}>
        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#fff', marginBottom: 40 }}>
          My Notifications
        </Text>
        <View style={{ gap: 15 }}>
          <Panel tittle={'Tittle'} date={'00/00/00'} menssage={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} />
          <Panel tittle={'Tittle'} date={'00/00/00'} menssage={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} />
          <Panel tittle={'Tittle'} date={'00/00/00'} menssage={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} />
        </View>
      </ScrollView>
    </>

  );
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
