import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Milage = () => {
  const [distance, setDistance] = useState('');
  const [fuel, setFuel] = useState('');
  const [price, setPrice] = useState('');
  const [mileageResult, setMileageResult] = useState('');

  const calculateMileage = () => {
    const distanceNum = parseFloat(distance);
    const fuelNum = parseFloat(fuel);

    if (!isNaN(distanceNum) && !isNaN(fuelNum) && fuelNum > 0) {
      const mileage = distanceNum / fuelNum;
      setMileageResult(mileage.toFixed(2));
    } else {
      setMileageResult('');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.unitName}>Distance in (km)</Text>
          <TextInput
            style={[styles.inputField, styles.neumorphTextInput]}
            value={distance}
            onChangeText={text => setDistance(text)}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#747474"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.unitName}>Fuel in (litre)</Text>
          <TextInput
            style={[styles.inputField, styles.neumorphTextInput]}
            value={fuel}
            onChangeText={text => setFuel(text)}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#747474"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.unitName}>Price in (INR)</Text>
          <TextInput
            style={[styles.inputField, styles.neumorphTextInput]}
            value={price}
            onChangeText={text => setPrice(text)}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#747474"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.unitName}>Mileage (km/l)</Text>
          <TextInput
            style={[styles.inputField, styles.neumorphTextInput, { backgroundColor: 'transparent', fontSize: 24 }]}
            value={mileageResult}
            editable={false}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={calculateMileage}>
        <Text style={styles.calculateButtonText}>Calculate Mileage</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#1E1E1E',
    borderRadius: 40,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  unitName: {
    color: '#747474',
    fontSize: 15,
    marginRight: 10,
  },
  inputField: {
    color: '#747474',
    fontSize: 20,
    flex: 1,
    textAlign: 'right',
    padding: 10,
    borderRadius: 20,
  },
  neumorphTextInput: {
    shadowColor: '#000',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#1E1E1E',
  },
  calculateButton: {
    backgroundColor: '#F63356',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  calculateButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Milage;
