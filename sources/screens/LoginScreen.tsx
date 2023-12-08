import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Input } from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/MainStack';
import { IconBrandTailwind } from 'tabler-icons-react-native';
import { loginProps } from '../../interface/user';
import multiservceApi from '../api/multiservice-api';

type ScreenNavigationProps = StackNavigationProp<MainStackParamList>


export const LoginScreen = () => {
  const navigator = useNavigation<ScreenNavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await multiservceApi.post<loginProps>('/clients/login', {
        email: email,
        password: password,
      });
      Alert.alert('calando ');

    } catch (error) {

    }
    // multiservceApi
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <IconBrandTailwind size={100} />
      </Text>
      <Input text="Email" value={email} setValue={setEmail} />
      <Input text="Password" value={password} setValue={setPassword} />

      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('SignUp')}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigator.navigate('SignUpScreen')}
      >
        <Text style={styles.link}>You don't have an account? Sign up</Text>
      </TouchableOpacity>
      <Text>
        {email}
      </Text>
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
});
