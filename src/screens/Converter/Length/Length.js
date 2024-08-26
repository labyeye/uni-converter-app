import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ArrowPathIcon} from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';

const Length = () => {
  const [input, setInput] = useState('');
  const [convertedValue, setConvertedValue] = useState('');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('ft');
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  let buttonSize =
    screenWidth <= 375 ? (screenWidth - 150) / 4 : (screenWidth - 100) / 4;
  let reverseButtonSize = buttonSize / 1.5;

  const handleButtonPress = symbol => {
    if (symbol === 'C') {
      setInput('');
      setConvertedValue('');
    } else if (symbol === '⌫') {
      const newInput = input.slice(0, -1);
      setInput(newInput);
      setConvertedValue(convertLength(newInput, fromUnit, toUnit));
    } else {
      const newInput = input + symbol;
      setInput(newInput);
      setConvertedValue(convertLength(newInput, fromUnit, toUnit));
    }
  };

  const convertLength = (value, fromUnit, toUnit) => {
    const conversionRates = {
      m: 1,
      cm: 100,
      ft: 3.28084,
      in: 39.3701,
      // Add more units as needed
    };

    const valueInMeters = parseFloat(value) / conversionRates[fromUnit];
    const convertedValue = (valueInMeters * conversionRates[toUnit]).toFixed(4);

    return isNaN(convertedValue) ? '' : convertedValue;
  };

  const handleReverse = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    const newConvertedValue = convertLength(input, toUnit, fromUnit);
    setConvertedValue(newConvertedValue);
  };

  const buttons = [
    ['7', '8', '9', '⌫'],
    ['4', '5', '6', 'C'],
    ['1', '2', '3', '.'],
    ['00', '0'],
  ];

  return (
    <LinearGradient
      colors={['#CDF5FD', '#CDF5FD', 'white']}
      style={styles.gradientContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <TouchableOpacity
              style={styles.unitybutton}
              onPress={() => setShowFromPicker(!showFromPicker)}>
              <Text style={styles.pickerText}>{fromUnit.toUpperCase()}</Text>
            </TouchableOpacity>
            {showFromPicker && (
              <Picker
                selectedValue={fromUnit}
                style={styles.picker}
                itemStyle={{color: 'black'}}
                onValueChange={itemValue => {
                  setFromUnit(itemValue);
                  setConvertedValue(convertLength(input, itemValue, toUnit));
                  setShowFromPicker(false);
                }}>
                <Picker.Item label="Meter" value="m" />
                <Picker.Item label="Centimeter" value="cm" />
                <Picker.Item label="Foot" value="ft" />
                <Picker.Item label="Inch" value="in" />
                {/* Add more units here */}
              </Picker>
            )}
            <TextInput
              style={styles.inputField}
              value={input}
              onChangeText={text => {
                setInput(text);
                setConvertedValue(convertLength(text, fromUnit, toUnit));
              }}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#747474"
              editable={false}
            />
          </View>

          <View style={styles.inputRow}>
            <TouchableOpacity
              style={styles.unitybutton}
              onPress={() => setShowToPicker(!showToPicker)}>
              <Text style={styles.pickerText}>{toUnit.toUpperCase()}</Text>
            </TouchableOpacity>
            {showToPicker && (
              <Picker
                selectedValue={toUnit}
                style={styles.picker}
                itemStyle={{color: 'black'}}
                onValueChange={itemValue => {
                  setToUnit(itemValue);
                  setConvertedValue(convertLength(input, fromUnit, itemValue));
                  setShowToPicker(false);
                }}>
                <Picker.Item label="Foot" value="ft" />
                <Picker.Item label="Meter" value="m" />
                <Picker.Item label="Centimeter" value="cm" />
                <Picker.Item label="Inch" value="in" />
                {/* Add more units here */}
              </Picker>
            )}
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
                <TouchableOpacity
                  key={index}
                  style={styles.buttonOuterShadow}
                  onPress={() => handleButtonPress(symbol)}>
                  <View style={styles.buttonInnerShadow}>
                    <View
                      style={[
                        styles.neumorphButton,
                        {width: buttonSize, height: buttonSize},
                      ]}>
                      <Text
                        style={[
                          styles.buttonText,
                          {
                            color:
                              symbol === 'C' || symbol === '⌫'
                                ? '#FE7A36'
                                : '#747474',
                          },
                        ]}>
                        {symbol}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  unitybutton: {
    width: 60,
    backgroundColor: 'white',
    borderRadius: 50,
    height: 40,
    justifyContent: 'center',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
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
    backgroundColor: '#89CFF3',
    borderRadius: 25,
    padding: 10,
    shadowColor: '#89CFF3',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 1,
    shadowRadius: 6,
    height: 110,
  },
  gradientContainer: {
    flex: 1,
  },
  picker: {
    flex: 2,
    color: 'white',
  },
  pickerText: {
    flex: 1,
    fontSize: 18,
    color: '#747474',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    shadowColor: 'white',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
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
    shadowColor: '#00A9FF',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 1,
    shadowRadius: 6,
    margin: 10,
  },
  buttonInnerShadow: {
    shadowColor: '#A0E9FF',
    shadowOffset: {width: -6, height: -6},
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  neumorphButton: {
    borderRadius: 50,
    backgroundColor: '#89CFF3',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  buttonText: {
    fontSize: 35,
    color: 'black',
  },
  reverseButtonOuterShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  reverseButtonInnerShadow: {
    shadowColor: '#FFF',
    shadowOffset: {width: -6, height: -6},
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  neumorphReverseButton: {
    borderRadius: 50,
    backgroundColor: '#89CFF3',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});

export default Length;
