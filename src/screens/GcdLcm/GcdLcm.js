import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const calculateGCD = (a, b) => {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};

const calculateLCM = (a, b) => {
  return (a * b) / calculateGCD(a, b);
};

const GcdLcm = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [gcd, setGcd] = useState(null);
  const [lcm, setLcm] = useState(null);

  const handleCalculate = () => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      setGcd(calculateGCD(num1, num2));
      setLcm(calculateLCM(num1, num2));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>GCD & LCM Calculator</Text>
      <TextInput
        style={[styles.inputField, styles.neumorphTextInput]}
        keyboardType="numeric"
        placeholder="Enter first number"
        placeholderTextColor="#747474"
        value={number1}
        onChangeText={setNumber1}
      />
      <TextInput
        style={[styles.inputField, styles.neumorphTextInput]}
        keyboardType="numeric"
        placeholder="Enter second number"
        placeholderTextColor="#747474"
        value={number2}
        onChangeText={setNumber2}
      />
      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </TouchableOpacity>
      {gcd !== null && (
        <Text style={styles.resultText}>GCD: {gcd}</Text>
      )}
      {lcm !== null && (
        <Text style={styles.resultText}>LCM: {lcm}</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#1A1A1A',
  },
  inputField: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: '#1A1A1A',
    marginVertical: 10,
  },
  neumorphTextInput: {
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: '#000',
    elevation: 5,
  },
  calculateButton: {
    backgroundColor: '#FE7A36',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  resultText: {
    color: '#FE7A36',
    fontSize: 20,
    marginVertical: 10,
  },
  label: {
    color: '#FE7A36',
    fontSize: 20,
    marginVertical: 10,
  },
});

export default GcdLcm;
