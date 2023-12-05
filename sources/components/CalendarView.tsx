import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';

export default function CalendarView() {
  const [days, setDays] = useState<string[]>([]);
  const [dayOfWeeks, setDayOfWeeks] = useState<string[]>([]);
  const [month, setMonth] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  useEffect(() => {
    const generateDates = () => {
      const daysArray: string[] = [];
      const dayOfWeeksArray: string[] = [];
      const currentDate = moment();
      const endDate = moment().add(6, 'day');

      while (currentDate <= endDate) {
        daysArray.push(currentDate.format('DD'));
        dayOfWeeksArray.push(currentDate.isSame(moment(), 'day') ? 'Today' : currentDate.format('ddd'));

        currentDate.add(1, 'day');
      }

      setDays(daysArray);
      setDayOfWeeks(dayOfWeeksArray);
      setMonth(currentDate.format('MMMM'));
    };

    generateDates();
  }, []);

  return (
    <View style={s.container}>
      <View style={s.month}>
        <Text style={{ transform: [{ rotate: '-90deg' }], padding: 0 }}>{month.slice(0, 3)}</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 1, flex: 1 }}>
        {days.map((day, index) => (
          <TouchableOpacity
            style={[s.containerDays, { flex: 1, borderBottomWidth: selectedDay === index ? 5 : 0 }]}
            key={index}
            onPress={() => setSelectedDay(index)}
          >
            <Text style={{ textAlign: 'center' }}>{dayOfWeeks[index]}</Text>
            <Text style={{ textAlign: 'center' }}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View >
  );
}

const s = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  month: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  containerDays: {
    height: 70,
    backgroundColor: '#f4f4f4',
    borderBottomColor: '#017499',
    paddingVertical: 10,
  },
});
