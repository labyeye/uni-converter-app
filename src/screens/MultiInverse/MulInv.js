import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const calculateMultiplicativeInverseMod = (a, m) => {
  a = a % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  return 'undefined';
};

const MultiplicativeInverse = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [inverse, setInverse] = useState(null);

  const handleCalculate = () => {
    const a = parseInt(num1, 10);
    const m = parseInt(num2, 10);

    if (!isNaN(a) && !isNaN(m) && m !== 0) {
      setInverse(calculateMultiplicativeInverseMod(a, m));
    } else {
      setInverse('undefined');
    }
  };

  return (
    <LinearGradient
      colors={['#CDF5FD', '#CDF5FD', 'white']}
      style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>
          Multiplicative Inverse Modulo Calculator
        </Text>
        <TextInput
          style={[styles.inputField, styles.neumorphTextInput]}
          keyboardType="numeric"
          placeholder="Enter num1"
          placeholderTextColor="#747474"
          value={num1}
          onChangeText={setNum1}
        />
        <TextInput
          style={[styles.inputField, styles.neumorphTextInput]}
          keyboardType="numeric"
          placeholder="Enter num2"
          placeholderTextColor="#747474"
          value={num2}
          onChangeText={setNum2}
        />
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={handleCalculate}>
          <Text style={styles.calculateButtonText}>Calculate</Text>
        </TouchableOpacity>
        {inverse !== null && (
          <Text style={styles.resultText}>
            {num1} x ? ≡ 1 (mod {num2}): {inverse}
          </Text>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#CDF5FD', // Color changed
  },
  inputField: {
    width: '80%',
    height: 40,
    borderRadius: 20, // Adjusted for neumorphism
    paddingHorizontal: 10,
    color: '#00A9FF', // Color changed
    backgroundColor: '#CDF5FD', // Color changed
    marginVertical: 10,
  },
  neumorphTextInput: {
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: '#000',
    elevation: 5,
  },
  calculateButton: {
    backgroundColor: '#A0E9FF', // Color changed
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 20,
    shadowColor: '#00A9FF',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  calculateButtonText: {
    color: '#000', // Color changed
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    color: '#00A9FF', // Color changed
    fontSize: 20,
    marginVertical: 10,
  },
  label: {
    color: '#747474', // Color changed
    fontSize: 20,
    marginVertical: 10,
  },
  gradientContainer: {
    flex: 1,
  },
});

export default MultiplicativeInverse;
