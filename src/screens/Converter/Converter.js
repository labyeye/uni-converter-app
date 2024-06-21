import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ChartBarIcon, ViewColumnsIcon, CubeIcon, MinusCircleIcon, BoltIcon, ScaleIcon, RocketLaunchIcon, SunIcon, ClockIcon } from 'react-native-heroicons/solid';

const Converter = ({ navigation }) => {
  const [input, setInput] = useState('');
  const screenWidth = Dimensions.get('window').width;
  let buttonSize = (screenWidth <= 375) ? (screenWidth - 110) / 4 : (screenWidth - 100) / 4;

  const items = [
    { name: 'Length', icon: <ChartBarIcon color="#FE7A36" size={buttonSize / 2} />, navigateTo: 'Length' },
    { name: 'Area', icon: <ViewColumnsIcon color="#FE7A36" size={buttonSize / 2} />, navigateTo:'Area' },
    { name: 'Volume', icon: <CubeIcon color="#FE7A36" size={buttonSize / 2} />,   navigateTo:'Volume'},
    { name: 'Pressure', icon: <MinusCircleIcon color="#FE7A36" size={buttonSize / 2} />,  navigateTo:'Pressure'},
    { name: 'Power', icon: <BoltIcon color="#FE7A36" size={buttonSize / 2} />,  navigateTo:'Power'},
    { name: 'Weight', icon: <ScaleIcon color="#FE7A36" size={buttonSize / 2} />,  navigateTo: 'Weight' },
    { name: 'Speed', icon: <RocketLaunchIcon color="#FE7A36" size={buttonSize / 2} />, navigateTo: 'Speed' },
    { name: 'Temperature', icon: <SunIcon color="#FE7A36" size={buttonSize / 2} />,  navigateTo: 'Temperature'},
    { name: 'Time', icon: <ClockIcon color="#FE7A36" size={buttonSize / 2} />, navigateTo:'Time' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.buttonOuterShadow}
              onPress={() => navigation.navigate(item.navigateTo)}
            >
              <View style={styles.buttonInnerShadow}>
                <View style={[styles.neumorphButton, { width: buttonSize, height: buttonSize }]}>
                  {item.icon}
                </View>
              </View>
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.name}</Text>
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
  },
  buttonsContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 70,
    gap: 30,
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  buttonOuterShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 6,
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
  itemText: {
    fontSize: 12,
    color: '#747474',
    marginTop: 10,
  },
});

export default Converter;
