
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {CalculatorIcon} from "react-native-heroicons/outline";

const Bmi = () => {
  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  neomorph: {
    shadowRadius: 10,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    height:40,
    width:150,
    backgroundColor: "blue", 
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default Bmi;
