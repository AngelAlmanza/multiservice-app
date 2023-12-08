import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { IconEdit } from 'tabler-icons-react-native';

const PerfilEditar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <TextInput
            style={styles.input}
            placeholder="Name"
          />
          <IconEdit size={30} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
          />
          <IconEdit size={30} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <IconEdit size={30} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Email</Text>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Email"
            keyboardType="email-address"
          />
          <IconEdit size={30} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <IconEdit size={30} />
        </View>
      </View>

      <TouchableOpacity style={{ backgroundColor: '#017499', borderRadius: 10, paddingVertical: 10, marginTop: 30 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
          Save Changes
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});

export default PerfilEditar;
