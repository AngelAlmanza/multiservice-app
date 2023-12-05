import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function HomePay() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isCardDropdownVisible, setCardDropdownVisible] = useState(false);

  const paymentMethods = [
    { id: 1, name: 'Efectivo' },
    { id: 2, name: 'Tarjeta' },
    { id: 3, name: 'Visa' },
    { id: 4, name: 'MasterCard' },
    { id: 5, name: 'Agregar' },
  ];

  const handleMethodPress = (method) => {
    if (method.name === 'Tarjeta') {
      // Si se selecciona "Tarjeta", muestra u oculta el desplegable
      setCardDropdownVisible(!isCardDropdownVisible);
    } else {
      setSelectedMethod(method);
      // Puedes agregar lógica adicional según el método seleccionado si es necesario
      // Por ejemplo, mostrar un formulario específico para ese método
      Alert.alert('Método seleccionado', `Has seleccionado: ${method.name}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Métodos de Pago</Text>

      {paymentMethods.map((method) => (
        <View key={method.id}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedMethod === method && { backgroundColor: '#0056b3' },
            ]}
            onPress={() => handleMethodPress(method)}
          >
            <Text style={styles.buttonText}>{method.name}</Text>
          </TouchableOpacity>

          {/* Agregar el contenido desplegable para "Tarjeta" */}
          {method.name === 'Tarjeta' && isCardDropdownVisible && (
            <View style={styles.cardDropdown}>
              <TouchableOpacity>
                <Text style={styles.title}>1234569863214587</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.title}>1234562148976325</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 10,
    width: 300,
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  cardDropdown: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
    width: 300,
  },
});
