import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { UserIcon, CalculatorIcon, ArrowPathIcon, FunnelIcon } from 'react-native-heroicons/solid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const Dashboard = ({ navigation }) => {

  const [input, setInput] = useState('');
  const screenWidth = Dimensions.get('window').width;
  let buttonSize = (screenWidth <= 375) ? (screenWidth - 90) / 4 : (screenWidth - 70) / 3;

  const items = [
    { name: 'Unit Converter', icon: <ArrowPathIcon color="#FE7A36" size={buttonSize / 2} />, navigateTo: 'ConverterStack' },
    { name: 'BMI', icon: <IonIcons name='body' color="#FE7A36" size={buttonSize / 2} />, navigateTo: 'BodyMassIndex' },
    { name: 'Simple Interest', icon: <MaterialCommunityIcons name='label-percent' size={buttonSize / 2} color='#FE7A36' />, navigateTo: 'Simple' },
    { name: 'Calculator', icon: <CalculatorIcon color="#FE7A36" size={buttonSize / 2} />, navigateTo: 'Calculator' },
    { name: 'Discount', icon: <MaterialCommunityIcons name='brightness-percent' size={buttonSize / 2} color='#FE7A36' />, navigateTo: 'Discount' },
    { name: 'Milage', icon: <MaterialCommunityIcons name='fuel' size={buttonSize / 2} color='#FE7A36' />, navigateTo: 'Milage' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <View style={styles.buttonsContainer}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => navigation.navigate(item.navigateTo)}
          >
            <View style={styles.buttonOuterShadow}>
              <View style={styles.buttonInnerShadow}>
                <View style={[styles.neumorphButton, { width: buttonSize, height: buttonSize }]}>
                  {item.icon}
                </View>
              </View>
            </View>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.adContainer}>
        <BannerAd
          unitId="ca-app-pub-6119758783032593/4123323972" // Replace with your actual Ad Unit ID
          size={BannerAdSize.FULL_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
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
  welcomeText: {
    fontSize: 40,
    color: "#FE7A36",
    paddingTop: 40,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
    gap: 30, // This is for spacing between items, you may need to adjust it based on your design
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    width: '20%', // Adjust the width to fit three buttons in one row
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
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  itemText: {
    fontSize: 12,
    color: '#747474',
    marginTop: 10,
    textAlign: 'center',
  },
  adContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});

export default Dashboard;
