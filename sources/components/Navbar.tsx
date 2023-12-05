/* eslint-disable react/react-in-jsx-scope */
import { View, Text, StyleSheet } from 'react-native';
import { IconSmartHome } from 'tabler-icons-react-native';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.options}>
        <IconSmartHome />
        <Text style={styles.link}>Home</Text>
      </View>
      <View style={styles.options}>
        <Text style={styles.link}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    height: 60,
    gap: 2,
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  link: {
    height: 25,
    backgroundColor: 'red',
  },
});
