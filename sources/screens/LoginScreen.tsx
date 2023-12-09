import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Input } from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/MainStack';
import { loginProps } from '../../interface/user';
import multiservceApi from '../api/multiservice-api';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ScreenNavigationProps = StackNavigationProp<MainStackParamList>


export const LoginScreen = () => {
  const navigator = useNavigation<ScreenNavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorChecker, setErrorChecker] = useState('');
  // const [token, setToken] = useState(null);


  const handleLogin = async () => {
    const formData = new FormData();

    if (!email || !password || !email.trim() || !password.trim()) {
      return setErrorChecker('Please fill all the fields');
    }

    if (!email.includes('@')) {
      return setErrorChecker('Please enter a valid email');
    }

    formData.append('email', email);
    formData.append('password', password);
    try {
      const response = await multiservceApi.post<loginProps>('/login', formData);
      const userID = response.data.id;
      await AsyncStorage.setItem('userID', userID.toString());
      navigator.navigate('HomeScreen');
      console.log(userID);
    } catch (error) {
      return setErrorChecker(error.response.data.message);
    }
  };
  // MENSAJE DE ERROR -- ALEXANDER
  // Basicamente esta cosa hacer que cualquier error que salga se muestre en la pantalla,
  // venga formateado o no XD, sirve mucho para saber que fallo pero por que la API no la
  // hice para que en el store me diera los errores de la forma en la que yo queria o saber
  // que error era pues aja, se pone chistoso

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logoImg} />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.error}>{errorChecker}</Text>
      <Input
        text="Email"
        value={email}
        setValue={setEmail}
      />
      <Input
        text="Password"
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
        onPress={() => navigator.navigate('SignUpScreen')}
      >
        <Text style={styles.link}>You don't have an account? Sign up</Text>
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
  logoImg: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginTop: 20,
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
  error: {
    color: 'red',
    marginBottom: 20,
    fontStyle: 'italic',
  },
});
