import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ChartBarIcon, ViewColumnsIcon, CubeIcon, MinusCircleIcon, BoltIcon, ScaleIcon, RocketLaunchIcon, SunIcon, ClockIcon } from 'react-native-heroicons/solid';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import LinearGradient from 'react-native-linear-gradient';

const Converter = ({ navigation }) => {
  const [input, setInput] = useState('');
  const screenWidth = Dimensions.get('window').width;
  let buttonSize = (screenWidth <= 375) ? (screenWidth - 110) / 4 : (screenWidth - 100) / 4;

  const items = [
    { name: 'Length', icon: <ChartBarIcon color="black" size={buttonSize / 2} />, navigateTo: 'Length' },
    { name: 'Area', icon: <ViewColumnsIcon color="black" size={buttonSize / 2} />, navigateTo:'Area' },
    { name: 'Volume', icon: <CubeIcon color="black" size={buttonSize / 2} />,   navigateTo:'Volume'},
    { name: 'Pressure', icon: <MinusCircleIcon color="black" size={buttonSize / 2} />,  navigateTo:'Pressure'},
    { name: 'Power', icon: <MaterialCommunityIcons name='power-plug' color="black" size={buttonSize / 2} />,  navigateTo:'Power'},
    { name: 'Weight', icon: <ScaleIcon color="black" size={buttonSize / 2} />,  navigateTo: 'Weight' },
    { name: 'Speed', icon: <IonIcons name='speedometer' color="black" size={buttonSize / 2} />, navigateTo: 'Speed' },
    { name: 'Temperature', icon: <SunIcon color="black" size={buttonSize / 2} />,  navigateTo: 'Temperature'},
    { name: 'Time', icon: <ClockIcon color="black" size={buttonSize / 2} />, navigateTo:'Time' },
  ];

  return (
    <LinearGradient 
    colors={['#CDF5FD','#CDF5FD','white']}
    style={styles.gradientContainer}
    >
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

    </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  gradientContainer:{
    flex:1
  },
  container: {
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
    fontSize: 12,
    color: '#747474',
    marginTop: 10,
    fontWeight:'bold'
  },
  adContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});

export default Converter;
