import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconBell, IconBrandTailwind, IconUser } from 'tabler-icons-react-native';

export default function HeaderView() {
  return (
    <View style={s.container}>
      <View style={s.subContainer}>
        <IconBrandTailwind size={40} />
      </View>
      <View style={s.subContainer}>
        <View style={s.notification}>
          <Text style={s.alert}>5</Text>
          <IconBell size={40} />
        </View>
        <IconUser size={40} />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  subContainer: {
    paddingVertical: 'auto',
    flexDirection: 'row',
    alignContent: 'center',
    gap: 20,
  },
  notification: {
    position: 'relative',
  },
  alert: {
    position: 'absolute',
    top: -5,
    right: 0,
    backgroundColor: '#F12626',
    height: 20,
    width: 20,
    borderRadius: 10,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: +1,
  },
});
