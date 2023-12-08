import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface panelProps {
  tittle: string
  date: string
  menssage: string
  state?: 'danger' | 'warning' | 'success' | 'normal';
}

export default function Panel({ tittle, date, menssage, state = 'normal' }: panelProps) {
  const stateColor = {
    danger: '#FFA29C',
    warning: '#FFFB95',
    success: '#D0FF95',
    normal: '#f4f4f4',
  };
  return (
    <View style={{ backgroundColor: stateColor[state], padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <Text style={s.bold}>{tittle}</Text>
        <Text style={s.bold}>{date}</Text>
      </View>
      <View>
        {state === 'success' ? <Text style={s.bold}>Detalles</Text> : ''}
        <Text numberOfLines={1}>
          {menssage}
        </Text>
      </View>
    </View>
  );
}
const s = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
