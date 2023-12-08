import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconBell, IconBrandTailwind, IconUser } from 'tabler-icons-react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/MainStack';

type ScreenNavigationProps = StackNavigationProp<MainStackParamList>

export default function HeaderView() {
  const navigator = useNavigation<ScreenNavigationProps>();
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.subContainer}
        onPress={() => { navigator.navigate('HomeScreen'); }}>
        <IconBrandTailwind size={40} />
      </TouchableOpacity>
      <TouchableOpacity style={s.subContainer}
        onPress={() => { navigator.navigate('NotificationsScreen'); }}>
        <View style={s.notification}>
          <Text style={s.alert}>5</Text>
          <IconBell size={40} />
        </View>
        <TouchableOpacity
          onPress={() => { navigator.navigate('MyProfileScreen'); }}>
          <IconUser size={40} />
        </TouchableOpacity>
      </TouchableOpacity>
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
    fontSize: 12,
  },
});
