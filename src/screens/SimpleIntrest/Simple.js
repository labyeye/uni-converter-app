import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SimpleInterest = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [simpleInterest, setSimpleInterest] = useState('');

  const calculateSimpleInterest = () => {
    const principalNum = parseFloat(principal);
    const rateNum = parseFloat(rate);
    const timeNum = parseFloat(time);

    if (!isNaN(principalNum) && !isNaN(rateNum) && !isNaN(timeNum)) {
      const interest = (principalNum * rateNum * timeNum) / 100;
      setSimpleInterest(interest.toFixed(2));
    } else {
      setSimpleInterest('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.out}>
          <View style={styles.inputRow}>
            <IonIcons
              name="pricetag"
              color="#FE7A36"
              size={24}
              style={styles.icon}
            />
            <Text style={styles.unitName}>Principal Amount</Text>
            <TextInput
              style={[styles.inputField, styles.neumorphTextInput]}
              value={principal}
              onChangeText={(text) => setPrincipal(text)}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#747474"
            />
          </View>
        </View>

        <View style={styles.out}>
          <View style={styles.inputRow}>
            <MaterialCommunityIcons
              name="percent"
              color="#FE7A36"
              size={24}
              style={styles.icon}
            />
            <Text style={styles.unitName}>Interest Rate (%)</Text>
            <TextInput
              style={[styles.inputField, styles.neumorphTextInput]}
              value={rate}
              onChangeText={(text) => setRate(text)}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#747474"
            />
          </View>
        </View>

        <View style={styles.out}>
          <View style={styles.inputRow}>
            <MaterialCommunityIcons
              name="clock-outline"
              color="#FE7A36"
              size={24}
              style={styles.icon}
            />
            <Text style={styles.unitName}>Time (in years)</Text>
            <TextInput
              style={[styles.inputField, styles.neumorphTextInput]}
              value={time}
              onChangeText={(text) => setTime(text)}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#747474"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={calculateSimpleInterest}>
        <Text style={styles.calculateButtonText}>Calculate Simple Interest</Text>
      </TouchableOpacity>

      <View style={styles.outneomorph}>
        <View style={[styles.resultContainer, styles.neumorphResult]}>
          <Text style={styles.resultText}>Principal Amount:    {principal || ' --'}</Text>
          <Text style={styles.resultText}>Interest Rate:            {rate || ' --'} %</Text>
          <Text style={styles.resultText}>Time:                         {time || '  --'} years</Text>
          <Text style={styles.resultText}>Simple Interest:         {simpleInterest||'--'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  out: {
    shadowColor: '#000000',
    shadowOffset: { width: -5, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 40,
    height: 75,
    marginVertical: 10,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#1A1A1A',
    borderRadius: 40,
    padding: 10,
    shadowColor: '#303030',
    shadowOffset: { width: 3, height: 3},
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  unitName: {
    color: '#747474',
    fontSize: 15,
    marginRight: 10,
    width: 120,
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
    shadowColor: '#1A1A1A',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#1A1A1A',
  },
  calculateButton: {
    backgroundColor: '#FE7A36',
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
  resultContainer: {
    marginTop: 30,
    width: '90%',
    alignItems: 'left',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: '#1A1A1A',
  },
  resultText: {
    color: '#747474',
    fontSize: 18,
    marginVertical: 5,
  },
  outneomorph:{
    height:172,
    shadowColor: '#303030',
    shadowOffset: {width: -1, height: 27},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    borderRadius:20,
    marginTop:0,
    backgroundColor: '#1A1A1A',
  },
  neumorphResult: {
    shadowColor: '#000000',
    shadowOffset: { width: -6, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    backgroundColor: '#1A1A1A',
  },
  icon: {
    marginRight: 10,
    marginLeft: 5,
  },
});

export default SimpleInterest;
