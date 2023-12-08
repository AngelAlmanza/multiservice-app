import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Panel from '../layouts/Panel';

export default function Reservations() {
  return (
    <View style={s.container}>
      <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: '#fff', marginBottom: 40 }}>
        My Reservations
      </Text>
      <View style={{ gap: 15 }}>
        <Panel tittle={'Tittle'} date={'00/00/00'} menssage={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} state={'success'} />
        <Panel tittle={'Tittle'} date={'00/00/00'} menssage={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} state={'warning'} />
        <Panel tittle={'Tittle'} date={'00/00/00'} menssage={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'} state={'danger'} />
      </View>
    </View>
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
