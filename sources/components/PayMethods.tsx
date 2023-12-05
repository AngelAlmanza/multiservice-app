import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconCash, IconChevronDown, IconCreditCard } from 'tabler-icons-react-native';

export default function PayMethod() {
  return (
    <View style={{ gap: 15, paddingVertical: 20 }}>
      <TouchableOpacity style={s.method}>
        <IconCash size={45} />
        <Text style={{ fontSize: 20, paddingTop: 8, marginStart: 30 }}>Cash</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.method}>
        <IconCreditCard size={45} />
        <Text style={{ fontSize: 20, paddingTop: 5, marginHorizontal: 30 }}>Card</Text>
        <IconChevronDown style={{ marginTop: 10 }} />
      </TouchableOpacity>
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
