import {Alert} from 'react-native';

const solictFerch = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error: any) {
    Alert.alert(error);
    return error;
  }
};

export default solictFerch;
