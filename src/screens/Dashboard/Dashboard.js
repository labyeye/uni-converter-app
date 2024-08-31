import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { UserIcon, CalculatorIcon, ArrowPathIcon, FunnelIcon } from 'react-native-heroicons/solid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = ({ navigation }) => {

  const [input, setInput] = useState('');
  const screenWidth = Dimensions.get('window').width;
  let buttonSize = (screenWidth <= 375) ? (screenWidth - 130) / 4 : (screenWidth - 70) / 3;

  const items = [
    { name: 'Unit Converter', icon: <ArrowPathIcon color="black" size={buttonSize / 2} />, navigateTo: 'ConverterStack' },
    { name: 'BMI', icon: <IonIcons name='body' color="black" size={buttonSize / 2} />, navigateTo: 'BodyMassIndex' },
    { name: 'Simple Interest', icon: <MaterialCommunityIcons name='label-percent' size={buttonSize / 2} color='black' />, navigateTo: 'Simple' },
    { name: 'Calculator', icon: <CalculatorIcon color="black" size={buttonSize / 2} />, navigateTo: 'Calculator' },
    { name: 'Discount', icon: <MaterialCommunityIcons name='brightness-percent' size={buttonSize / 2} color='black' />, navigateTo: 'Discount' },
    { name: 'Milage', icon: <MaterialCommunityIcons name='fuel' size={buttonSize / 2} color='black' />, navigateTo: 'Milage' },
    { name: 'Matrix Multiply', icon: <MaterialCommunityIcons name='matrix' size={buttonSize / 2} color='black' />, navigateTo: 'MatrixMultiplication' },
    { name: 'Multiply Inverse', icon: <MaterialCommunityIcons name='multiplication-box' size={buttonSize / 2} color='black' />, navigateTo: 'MultiplicativeInverse' },
    { name: 'Gcd & Lcm', icon: <MaterialCommunityIcons name='math-norm-box' size={buttonSize / 2} color='black' />, navigateTo: 'GcdLcm' },
  ];

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      return 'Good Morning';
    } else if (hours < 18) {
      return 'Good Afternoo';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <LinearGradient
      colors={['#CDF5FD','#CDF5FD','white']}
      style={styles.gradientContainer}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.greetingText}>{getGreeting()}, User!</Text>
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
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 20, // Adjust the padding to avoid overlap with the ad banner
  },
  greetingText: {
    fontSize: 28,
    color: "#00A9FF",
    paddingTop: 20,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
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
    shadowColor: '#00A9FF',
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  buttonInnerShadow: {
    shadowColor: '#A0E9FF',
    shadowOffset: { width: -6, height: -6 },
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
  itemText: {
    fontSize: 13,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  adContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Dashboard;
