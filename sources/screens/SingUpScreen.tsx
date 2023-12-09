import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/MainStack';
import { Input } from '../components/Input';
import multiservceApi from '../api/multiservice-api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ScreenNavigationProps = StackNavigationProp<MainStackParamList>

export const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigation<ScreenNavigationProps>();

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('name', name);
    formData.append('last_name', lastName);
    formData.append('phone', phone);
    try {
      const response = await multiservceApi.post('clients/store', formData);
      const userID = response.data.id;
      await AsyncStorage.setItem('userID', userID.toString());
      navigator.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logoImg} />
      <Text style={styles.title}>Sign Up!</Text>
      <Input text="Name" value={name} setValue={setName} />
      <Input text="Last name" value={lastName} setValue={setLastName} />
      <Input text="Phone" value={phone} setValue={setPhone} />
      <Input text="Email" value={email} setValue={setEmail} />
      <Input text="Password" value={password} setValue={setPassword} hidden />
      <Input
        text="Confirm Password"
        value={password}
        setValue={setPassword}
        hidden
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigator.navigate('LoginScreen')}
      >
        <Text style={styles.link}>do you have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
  logoImg: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  link: {
    color: '#007AFF',
    marginTop: 20,
  },
});
