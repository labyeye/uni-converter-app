import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { UserIcon, CalculatorIcon, ArrowPathIcon, FunnelIcon} from 'react-native-heroicons/solid';

const Dashboard = ({ navigation }) => {
  const [input, setInput] = useState('');
  const screenWidth = Dimensions.get('window').width;
  let buttonSize = (screenWidth <= 375) ? (screenWidth - 90) / 3 : (screenWidth - 60) / 3;

  const items = [
    { name: ' Unit Converter', icon: <ArrowPathIcon color="#F63356" size={buttonSize / 2} />, navigateTo: 'ConverterStack' },
    { name: 'BMI ', icon: <UserIcon color="#F63356" size={buttonSize / 2} />, navigateTo:'BodyMassIndex' },
    { name: 'Calculator', icon: <CalculatorIcon color="#F63356" size={buttonSize / 2} />,   navigateTo:'Calculator'},
    { name: 'Milage', icon: <FunnelIcon color="#F63356" size={buttonSize / 2} />,   navigateTo:'Milage'},

    
  ];

  return (
    <View style={styles.container}>
      <Text style={{fontSize:40,color:"#F63356",paddingTop:40}}>Welcome</Text>
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
    borderRadius: 20,
    backgroundColor: '#1E1E1E',
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

export default Dashboard;
