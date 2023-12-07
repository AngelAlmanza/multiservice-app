import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomePay() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi perfil</Text>
      <View style={styles.profileContainer}>
        <Image
          source={require('multiservice-app/assets/perfil.png')}
          style={styles.profileImage}
        />
        <Text style={styles.subTitle}>Hola, Eduardo</Text>
      </View>
      <View style={styles.option}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reservaciones</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subTitle}>Métodos de pagos</Text>
      <View style={styles.paymentColumn}>
        <TouchableOpacity style={styles.paymentButton}>
          <Image
            source={require('multiservice-app/assets/tarjeta.png')} // Reemplaza con la ruta correcta de tu imagen Visa
            style={styles.paymentIcon}
          />
          <Text style={styles.paymentText}>Visa</Text>
          <Text style={styles.paymentNumbers}>**** 1234</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton}>
          <Image
            source={require('multiservice-app/assets/tarjeta.png')} // Reemplaza con la ruta correcta de tu imagen Mastercard
            style={styles.paymentIcon}
          />
          <Text style={styles.paymentText}>Mastercard</Text>
          <Text style={styles.paymentNumbers}>**** 5678</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 28,
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 20,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    padding: 15,
    width: '74%', // Ancho del 70% de la pantalla
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  column: {
    width: '46%', // Ajusta según sea necesario
    marginLeft: 10,
    marginRight: 10,
  },
  paymentColumn: {
    width: '80%', // Ancho del 80% de la pantalla
    alignSelf: 'center',
    marginTop: 10,
  },
  paymentButton: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 15,
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  paymentText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  paymentNumbers: {
    color: 'black',
    fontSize: 14,
    textAlign: 'right',
  },
});
