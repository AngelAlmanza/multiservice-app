import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconUserCircle } from 'tabler-icons-react-native';
import { Card } from '../components/Card';
import HeaderView from '../components/HeaderView';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/MainStack';

type ScreenNavigationProps = StackNavigationProp<MainStackParamList>

export const MyProfileScreen = () => {
  const navigator = useNavigation<ScreenNavigationProps>();
  return (
    <>
      <HeaderView />
      <View style={styles.container}>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.profileContainer}>
          <IconUserCircle size={90}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.subTitle}>Hello, </Text>
            <Text style={{ fontSize: 18 }}>Eduardo</Text>
          </View>
        </View>
        <View style={styles.option}>
          <TouchableOpacity style={styles.button}
            onPress={() => { navigator.navigate('ReservationsScreen'); }}>
            <Text style={styles.buttonText}>Reservations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => { navigator.navigate('EditProfileScreen'); }}>
            <Text style={styles.buttonText}>Edit Porfile</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subTitle}>payment methods</Text>
        <View style={styles.paymentColumn}>
          <Card type={'visa'} number={'0000 0000 0000 0000'} id={1} />
          <Card type={'visa'} number={'0000 0000 0000 0000'} id={1} />
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </View >
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 20,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    marginVertical: 20,
    gap: 10,
  },
  paymentColumn: {
    flex: 1,
    marginTop: 10,
    gap: 15,
  },
});
