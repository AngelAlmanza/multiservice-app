import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/MainStack';
import { Input } from '../components/Input';

type ScreenNavigationProps = StackNavigationProp<MainStackParamList>

export const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useNavigation<ScreenNavigationProps>();

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error');
    } else {
      setEmail('');
      setPassword('');
      navigator.navigate('HomeScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>tittle</Text>
      <Input text="Name" value={email} setValue={setEmail} />
      <Input text="Last name" value={email} setValue={setEmail} />
      <Input text="Phone" value={email} setValue={setEmail} />
      <Input text="Email" value={email} setValue={setEmail} />
      <Input text="Password" value={password} setValue={setPassword} />
      <Input
        text="Confirm Password"
        value={email}
        setValue={setEmail}
      />
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('SignUp')}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // onPress={() => navigation.navigate('SignUp')}
        onPress={() => navigator.navigate('LoginScreen')}
      >
        <Text style={styles.link}>do you have an account? Login</Text>
      </TouchableOpacity>
      {/* + */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
