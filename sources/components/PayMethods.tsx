import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconCash } from 'tabler-icons-react-native';
import { CardsList } from './CardsList';

export default function PayMethod() {
  const cards = [{ type: 'visa', cardNumber: '0000 0000 0000 1234' },
  { type: 'mastercard', cardNumber: '0000 0000 0000 9876' },
  { type: 'visa', cardNumber: '0000 0000 0000 4563' }];
  return (
    <View style={{ gap: 15, paddingVertical: 20 }}>
      <TouchableOpacity style={s.method}>
        <IconCash size={45} />
        <Text style={{ fontSize: 20, paddingTop: 8, marginStart: 30 }}>Cash</Text>
      </TouchableOpacity>
      <CardsList data={cards} />
    </View>
  );
}

const s = StyleSheet.create({
  method: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
