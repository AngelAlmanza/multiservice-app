import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { IconBrandMastercard, IconBrandVisa } from 'tabler-icons-react-native';

interface Props {
  id: number;
  type: string;
  number: string;
}

export const Card = ({ type, number, id }: Props) => {
  return (
    <TouchableOpacity key={id} style={s.method}>
      <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        {type === 'visa' ? (
          <IconBrandVisa size={45} />
        ) : (
          <IconBrandMastercard size={45} />
        )}
        <Text style={{ fontSize: 20, paddingTop: 8, marginStart: 30 }}>
          {type}
        </Text>
      </View>
      <Text>
        {
          number.slice(number.length - 4, number.length)
        }
      </Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  method: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
