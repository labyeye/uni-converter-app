import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Calculator = () => {
  const [input, setInput] = useState('');
  const screenWidth = Dimensions.get('window').width;
  let buttonSize =
    screenWidth <= 375 ? (screenWidth - 130) / 4 : (screenWidth - 100) / 4;

  const handleButtonPress = value => {
    if (
      typeof value === 'number' ||
      value === '.' ||
      ['+', '-', 'x', '÷'].includes(value)
    ) {
      setInput(input + value);
    } else if (value === 'C') {
      setInput('');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else if (value === '%') {
      if (input) {
        const sanitizedInput = input.replace(/x/g, '*').replace(/÷/g, '/');
        const result = eval(sanitizedInput) / 100;
        setInput(result.toString());
      }
    } else if (value === '00') {
      setInput(input + '00');
    } else if (value === '=') {
      try {
        const sanitizedInput = input.replace(/x/g, '*').replace(/÷/g, '/');
        const result = eval(sanitizedInput);
        setInput(result.toString());
      } catch (e) {
        setInput('Error');
      }
    }
  };

  return (
    <LinearGradient
      colors={['#CDF5FD', '#CDF5FD', 'white']}
      style={styles.gradientContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.inputOuterShadow}>
            <View style={styles.inputInnerShadow}>
              <TextInput
                style={styles.neumorphInput}
                placeholder=""
                placeholderTextColor="#555"
                value={input}
                editable={false}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsRow}>
            {['C', '%', '⌫', '÷'].map((symbol, index) => (
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
                    <Text style={{fontSize: 35, color: '#FE7A36'}}>
                      {symbol}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {[
            [1, 2, 3, 'x'],
            [4, 5, 6, '+'],
            [7, 8, 9, '-'],
            ['00', 0, '.', '='],
          ].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonsRow}>
              {row.map(number => (
                <TouchableOpacity
                  key={number}
                  style={styles.buttonOuterShadow}
                  onPress={() => handleButtonPress(number)}>
                  <View style={styles.buttonInnerShadow}>
                    <View
                      style={[
                        styles.neumorphButton,
                        {width: buttonSize, height: buttonSize},
                      ]}>
                      <Text style={styles.buttonText}>{number}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  gradientContainer:{
    flex:1
  },
  inputContainer: {
    width: '90%',
    height: '25%',
    justifyContent: 'center',
    marginTop: 30,
  },
  inputOuterShadow: {
    shadowColor: '#00A9FF',
    shadowOffset: {width: -6, height: -6},
    shadowOpacity: 0.6,
    shadowRadius: 6,
    backgroundColor: '#89CFF3',
    borderRadius: 15, // Adjusted border radius for rounded rectangle
    padding: 10,
  },
  inputInnerShadow: {
    shadowColor: '#A0E9FF',
    shadowOffset: {width: 3, height: 9},
    shadowOpacity: 8,
    shadowRadius: 5,
    backgroundColor: '#89CFF3',
    borderRadius: 15, // Adjusted border radius for rounded rectangle
  },
  neumorphInput: {
    width: '100%',
    height: '100%',
    borderRadius: 15, // Adjusted border radius for rounded rectangle
    backgroundColor: '#89CFF3',
    textAlign: 'right',
    fontSize: 30,
    color: '#747474',
    elevation: 4,
    paddingHorizontal: 5,
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
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 5,
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
});

export default Calculator;
