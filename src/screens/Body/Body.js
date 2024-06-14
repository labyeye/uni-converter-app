import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const BodyMassIndex = () => {
  const [weightInput, setWeightInput] = useState('');
  const [heightInput, setHeightInput] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');

  const calculateBMI = () => {
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      const bmi = weight / Math.pow(height / 100, 2); // Convert height from cm to meters
      const bmiFormatted = bmi.toFixed(2);
      setBmiResult(bmiFormatted);

      // Determine BMI message
      if (bmi < 18.5) {
        setBmiMessage('Underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setBmiMessage('Normal weight');
      } else if (bmi >= 24.9 && bmi < 29.9) {
        setBmiMessage('Overweight');
      } else {
        setBmiMessage('Obese');
      }
    } else {
      setBmiResult('');
      setBmiMessage('');
    }
  };

  return (
    <View style={styles.container}>
              <Text style={{color:'#F63356',fontSize:30,margin:10,fontWeight:'500'}}>BMI Calculator</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.unitName}>Weight (kg)</Text>
          <TextInput
            style={[styles.inputField, styles.neumorphTextInput]}
            value={weightInput}
            onChangeText={text => setWeightInput(text)}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#747474"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.unitName}>Height (cm)</Text>
          <TextInput
            style={[styles.inputField, styles.neumorphTextInput]}
            value={heightInput}
            onChangeText={text => setHeightInput(text)}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#747474"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.unitName}>BMI</Text>
          <TextInput
            style={[styles.inputField, styles.neumorphTextInput, { backgroundColor: 'transparent', fontSize: 24 }]}
            value={bmiResult}
            editable={false}
          />
        </View>
        {bmiMessage ? (
          <Text style={styles.bmiMessage}>{`Your BMI is ${bmiResult}. ${bmiMessage}.`}</Text>
        ) : null}
      </View>
      
      <TouchableOpacity style={styles.calculateButton} onPress={calculateBMI}>
        <Text style={styles.calculateButtonText}>Calculate BMI</Text>
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
    paddingTop: 70,
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
    borderRadius: 25,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  unitName: {
    color: '#747474',
    fontSize: 18,
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
  bmiMessage: {
    marginTop: 20,
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default BodyMassIndex;
