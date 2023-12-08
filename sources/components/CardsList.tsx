import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Card from '../layouts/Card';
import { IconCreditCard, IconChevronUp, IconChevronDown } from 'tabler-icons-react-native';

interface dataProp {
  data: {
    type: string,
    cardNumber: string
  }[],
}

const AnimatedView = Animated.createAnimatedComponent(View);

export default function DropdownList({ data }: dataProp) {
  const [deploy, setDeploy] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current; // Valor inicial de altura

  useEffect(() => {
    Animated.timing(
      heightAnim,
      {
        toValue: deploy ? data.length * 80 : 0, // Asume que cada elemento tiene una altura de 50
        duration: 300, // Duración de la animación en milisegundos
        useNativeDriver: false,
      }
    ).start();
  }, [deploy, data.length, heightAnim]);

  return (
    <View style={{ gap: 10 }}>
      <TouchableOpacity
        style={s.method}
        onPress={(event) => {
          event.stopPropagation();
          setDeploy(!deploy);
        }}>
        <View style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
          <IconCreditCard size={45} />
          <Text style={{ fontSize: 20, paddingTop: 8, marginStart: 30 }}>Card</Text>
        </View>
        {deploy ? <IconChevronUp size={24} color="black" /> : <IconChevronDown size={24} color="black" />}
      </TouchableOpacity>

      <AnimatedView style={{ height: heightAnim, overflow: 'hidden', gap: 10 }}>
        {data.map((list, i) => (
          <Card type={list.type} number={list.cardNumber} id={i} />

        ))}
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <Text>Add</Text>
        </TouchableOpacity>
      </AnimatedView>

    </View >
  );
}

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
