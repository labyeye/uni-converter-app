import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

import LinearGradient from 'react-native-linear-gradient';

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
    <LinearGradient
      colors={['#CDF5FD', '#CDF5FD', 'white']}
      style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>GCD & LCM Calculator</Text>
        <View style={styles.inputContainer}>
          <View style={styles.out}>
            <TextInput
              style={[styles.inputField, styles.neumorphTextInput]}
              keyboardType="numeric"
              placeholder="Enter first number"
              placeholderTextColor="#747474"
              value={number1}
              onChangeText={setNumber1}
            />
          </View>
          <View style={styles.out}>
            <TextInput
              style={[styles.inputField, styles.neumorphTextInput]}
              keyboardType="numeric"
              placeholder="Enter second number"
              placeholderTextColor="#747474"
              value={number2}
              onChangeText={setNumber2}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={handleCalculate}>
          <Text style={styles.calculateButtonText}>Calculate</Text>
        </TouchableOpacity>
        {gcd !== null && <Text style={styles.resultText}>GCD: {gcd}</Text>}
        {lcm !== null && <Text style={styles.resultText}>LCM: {lcm}</Text>}
      </ScrollView>
      <View style={styles.adContainer}>
        <BannerAd
          unitId="ca-app-pub-6119758783032593/4123323972"
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    color: '#747474',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  out: {
    shadowColor: '#00A9FF',
    shadowOffset: {width: -5, height: -4},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 40,
    height: 60,
    marginVertical: 14,
    backgroundColor: '#89CFF3',
  },
  inputField: {
    color: '#00A9FF',
    fontSize: 20,
    padding: 20,
    borderRadius: 20,
    width: '100%',
    height: '100%',
  },
  neumorphTextInput: {
    shadowColor: '#00A9FF',
    shadowOffset: {width: -2, height: -2},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
  },
  calculateButton: {
    backgroundColor: '#A0E9FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#00A9FF',
    shadowOffset: {width: 4, height: 6},
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  calculateButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  resultText: {
    color: '#747474',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default GcdLcm;
