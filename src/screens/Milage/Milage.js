import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  MapPinIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from 'react-native-heroicons/outline';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

const Milage = () => {
  const [distance, setDistance] = useState('');
  const [fuel, setFuel] = useState('');
  const [price, setPrice] = useState('');
  const [mileageResult, setMileageResult] = useState('');

  const calculateMileage = () => {
    const distanceNum = parseFloat(distance);
    const fuelNum = parseFloat(fuel);

    if (!isNaN(distanceNum) && !isNaN(fuelNum) && fuelNum > 0) {
      const mileage = distanceNum / fuelNum;
      setMileageResult(mileage.toFixed(2));
    } else {
      setMileageResult('');
    }
  };

  return (
    <LinearGradient
      colors={['#CDF5FD', '#CDF5FD', 'white']}
      style={styles.gradientContainer}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.out}>
            <View style={styles.inputRow}>
              <MapPinIcon size={24} color="black" style={styles.icon} />
              <Text style={styles.unitName}>Distance in (km)</Text>
              <TextInput
                style={[styles.inputField, styles.neumorphTextInput]}
                value={distance}
                onChangeText={text => setDistance(text)}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#747474"
              />
            </View>
          </View>
          <View style={styles.out}>
            <View style={styles.inputRow}>
              <MaterialCommunityIcons
                name="fuel"
                size={24}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.unitName}>Fuel in (litre)</Text>
              <TextInput
                style={[styles.inputField, styles.neumorphTextInput]}
                value={fuel}
                onChangeText={text => setFuel(text)}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#747474"
              />
            </View>
          </View>
          <View style={styles.out}>
            <View style={styles.inputRow}>
              <FontAwesome
                name="rupee"
                size={24}
                color="black"
                style={{marginLeft: 10, marginRight: 17}}
              />
              <Text style={styles.unitName}>Price in (INR)</Text>
              <TextInput
                style={[styles.inputField, styles.neumorphTextInput]}
                value={price}
                onChangeText={text => setPrice(text)}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#747474"
              />
            </View>
          </View>
          <View style={styles.out}>
            <View style={styles.inputRow}>
              <FontAwesome
                name="road"
                size={24}
                color="black"
                style={styles.icon}
              />
              <Text style={styles.unitName}>Mileage (km/l)</Text>
              <TextInput
                style={[
                  styles.inputField,
                  styles.neumorphTextInput,
                  styles.mileageResultInput,
                ]}
                value={mileageResult}
                editable={false}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.calculateButton}
          onPress={calculateMileage}>
          <Text style={styles.calculateButtonText}>Calculate Mileage</Text>
        </TouchableOpacity>
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
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 20,
  },
  gradientContainer:{
    flex:1
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
  },
  adContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#89CFF3',
    borderRadius: 40,
    padding: 10,
    shadowColor: '#A0E9FF',
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  icon: {
    marginRight: 10,
    marginLeft: 5,
  },
  unitName: {
    color: '#747474',
    fontSize: 15,
    marginRight: 10,
    width: 120,
  },
  inputField: {
    color: '#747474',
    fontSize: 20,
    flex: 1,
    textAlign: 'right',
    padding: 10,
    borderRadius: 20,
  },
  neumorphTextInput: {
    shadowColor: '#00A9FF',
    shadowOffset: {width: -2, height: -2},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#89CFF3',
  },
  mileageResultInput: {
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  calculateButton: {
    backgroundColor: '#89CFF3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 25,
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
  out: {
    shadowColor: '#00A9FF',
    shadowOffset: {width: -5, height: -4},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 40,
    height: 75,
    marginVertical: 10,
  },
});

export default Milage;
