import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Input from '../layouts/Input';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error');
    } else {
      Alert.alert('Welcome');
      setEmail('');
      setPassword('');
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
        onPress={() => Alert.alert('Hello')}
      >
        <Text style={styles.link}>do you have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

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
