import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { ArrowPathIcon } from "react-native-heroicons/outline";

const Temperature = () => {
  const [input, setInput] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [isMeterToFoot, setIsMeterToFoot] = useState(true);

  const screenWidth = Dimensions.get('window').width;
  let buttonSize = (screenWidth <= 375) ? (screenWidth - 150) / 4 : (screenWidth - 100) / 4;
  let reverseButtonSize = buttonSize / 1.5;

  const handleButtonPress = (symbol) => {
    if (symbol === 'C') {
      setInput('');
      setConvertedValue('');
    } else if (symbol === '⌫') {
      const newInput = input.slice(0, -1);
      setInput(newInput);
      setConvertedValue(isMeterToFoot ? convertMetersToFeet(newInput) : convertFeetToMeters(newInput));
    } else {
      const newInput = input + symbol;
      setInput(newInput);
      setConvertedValue(isMeterToFoot ? convertMetersToFeet(newInput) : convertFeetToMeters(newInput));
    }
  };

  const convertMetersToFeet = (meters) => {
    const feet = (parseFloat(meters) * (9/5)+32).toFixed(4);
    return isNaN(feet) ? '' : feet;
  };

  const convertFeetToMeters = (feet) => {
    const meters = ((parseFloat(feet) -32)*(5/9)).toFixed(4);
    return isNaN(meters) ? '' : meters;
  };

  const handleReverse = () => {
    setIsMeterToFoot(!isMeterToFoot);
    const newConvertedValue = isMeterToFoot ? convertFeetToMeters(input) : convertMetersToFeet(input);
    setConvertedValue(newConvertedValue);
  };

  const buttons = [
    ['7', '8', '9', '⌫'],
    ['4', '5', '6', 'C'],
    ['1', '2', '3', '.'],
    ['00', '0']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <View style={styles.circle}><Text style={styles.unitText}>{isMeterToFoot ? 'C' : 'Fh'}</Text></View>
          <Text style={styles.unitName}>{isMeterToFoot ? 'Celcius' : 'Farhrenheit'}</Text>
          <TextInput
            style={styles.inputField}
            value={input}
            onChangeText={(text) => {
              setInput(text);
              setConvertedValue(isMeterToFoot ? convertMetersToFeet(text) : convertFeetToMeters(text));
            }}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#747474"
            editable={false}
          />
        </View>
        <TouchableOpacity onPress={handleReverse} style={styles.reverseButtonOuterShadow}>
          <View style={styles.reverseButtonInnerShadow}>
            <View style={[styles.reverseButton, { width: reverseButtonSize, height: reverseButtonSize }]}>
              <ArrowPathIcon color="#FE7A36" size={reverseButtonSize * 0.5} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.inputRow}>
          <View style={styles.circle}><Text style={styles.unitText}>{isMeterToFoot ? 'Fh' : 'C'}</Text></View>
          <Text style={styles.unitName}>{isMeterToFoot ? 'Farhrenheit' : 'Celcius'}</Text>
          <TextInput
            style={styles.inputField}
            value={convertedValue}
            editable={false}
          />
        </View>
      </View>
      
      <View style={styles.buttonsContainer}>
        
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonsRow}>
            {row.map((symbol, index) => (
              <TouchableOpacity key={index} style={styles.buttonOuterShadow} onPress={() => handleButtonPress(symbol)}>
                <View style={styles.buttonInnerShadow}>
                  <View style={[styles.neumorphButton, { width: buttonSize, height: buttonSize }]}>
                    <Text style={[styles.buttonText, { color: (symbol === 'C' || symbol === '⌫') ? '#FE7A36' : '#747474' }]}>{symbol}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1A1A1A',
      flex: 1,
      alignItems: 'center',
      paddingVertical: 20,
      paddingTop: 20, // Adding top padding to account for the notch
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
      borderRadius: 25,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 6, height: 6 },
      shadowOpacity: 1,
      shadowRadius: 6,
    },
    circle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#1A1A1A',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#333',
      shadowOffset: { width: -6, height: -6 },
      shadowOpacity: 0.7,
      shadowRadius: 6,
    },
    unitText: {
      color: '#FE7A36',
      fontSize: 18,
      fontWeight: 'bold',
    },
    unitName: {
      color: '#747474',
      fontSize: 18,
      marginHorizontal: 10,
      flex: 1,
    },
    inputField: {
      color: '#747474',
      fontSize: 18,
      flex: 1,
      textAlign: 'right',
    },
    buttonsContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
      marginTop: 20,
    },
    buttonsRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10,
    },
    buttonOuterShadow: {
      shadowColor: '#000',
      shadowOffset: { width: 6, height: 6 },
      shadowOpacity: 1,
      shadowRadius: 6,
      margin: 10,
    },
    buttonInnerShadow: {
      shadowColor: '#333',
      shadowOffset: { width: -6, height: -6 },
      shadowOpacity: 0.7,
      shadowRadius: 6,
    },
    neumorphButton: {
      borderRadius: 50,
      backgroundColor: '#1A1A1A',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
    },
    buttonText: {
      fontSize: 35,
      color: '#747474',
    },
    reverseButtonOuterShadow: {
      shadowColor: '#000',
      shadowOffset: { width: 6, height: 6 },
      shadowOpacity: 1,
      shadowRadius: 6,
      margin: 10,
      alignSelf: 'center',
    },
    reverseButtonInnerShadow: {
      shadowColor: '#333',
      shadowOffset: { width: -6, height: -6 },
      shadowOpacity: 0.7,
      shadowRadius: 6,
    },
    reverseButton: {
      borderRadius: 50,
      backgroundColor: '#1A1A1A',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
    },
    reverseButtonText: {
      fontSize: 25,
      color: '#FE7A36',
    },
  });

export default Temperature;
