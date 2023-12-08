import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { IconChevronDown, IconChevronUp } from 'tabler-icons-react-native';

interface dataProp {
  data: string[],
  tittle: string
}

const AnimatedView = Animated.createAnimatedComponent(View);

export const DropdownList = ({ data, tittle }: dataProp) => {
  const [deploy, setDeploy] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current; // Valor inicial de altura

  useEffect(() => {
    Animated.timing(
      heightAnim,
      {
        toValue: deploy ? data.length * 50 : 0, // Asume que cada elemento tiene una altura de 50
        duration: 300, // Duración de la animación en milisegundos
        useNativeDriver: false,
      }
    ).start();
  }, [deploy, data.length, heightAnim]);

  return (
    <View style={{ marginBottom: 40 }}>
      <View style={{ borderRadius: 10, overflow: 'hidden', marginBottom: 10 }}>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: '#F4F4F4' }}
          onPress={(event) => {
            event.stopPropagation();
            setDeploy(!deploy);
          }}>
          <View style={s.dropdownLabel}>
            <Text style={{ fontSize: 20, marginEnd: 10 }}>{tittle}</Text>
            {deploy ? <IconChevronUp size={24} color="black" /> : <IconChevronDown size={24} color="black" />}
          </View>
        </TouchableOpacity>

        <AnimatedView style={{ height: heightAnim, overflow: 'hidden', gap: 1 }}>
          {data.map((list, i) => (
            <TouchableOpacity key={i}
              style={{ backgroundColor: '#E4E4E4', paddingVertical: 10, borderColor: '#2DABFF', borderStartWidth: 5 }}>
              <View style={s.dropdownLabel}>
                <Text style={{ fontSize: 20, marginEnd: 10 }}>{list}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </AnimatedView>
      </View >
      <View style={s.add}>
        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          <Text style={{ fontSize: 16 }}>adder other service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  dropdownLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 30,
    fontSize: 30,
  },
  add: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
