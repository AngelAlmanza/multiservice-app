import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface InputProps {
  text: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  hidden?: boolean;
}

export const Input = ({ text, value, setValue, hidden }: InputProps) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        placeholder={text}
        value={value}
        onChangeText={setValue}
        secureTextEntry={hidden}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
});
