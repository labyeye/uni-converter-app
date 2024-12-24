import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Linking,
  SafeAreaView,
} from 'react-native';
import {
  ArrowsUpDownIcon,
  ScaleIcon,
  UserCircleIcon,
} from 'react-native-heroicons/solid';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const BodyMassIndex = () => {
  const [weightInput, setWeightInput] = useState('');
  const [heightInput, setHeightInput] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');

  const openLink = url => {
    Linking.openURL(url).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

  const calculateBMI = () => {
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
      const bmi = weight / Math.pow(height / 100, 2); // Convert height from cm to meters
      const bmiFormatted = bmi.toFixed(2);
      setBmiResult(bmiFormatted);

      // Determine BMI message
      if (bmi < 18.5) {
        setBmiMessage('Underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setBmiMessage('Normal weight');
      } else if (bmi >= 24.9 && bmi < 29.9) {
        setBmiMessage('Overweight');
      } else {
        setBmiMessage('Obese');
      }
    } else {
      setBmiResult('');
      setBmiMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.out}>
          <View style={styles.inputRow}>
            <FontAwesome5
              name="weight"
              size={24}
              color="#FE7A36"
              style={styles.icon}
            />
            <Text style={styles.unitName}>Weight (kg)</Text>
            <TextInput
              style={[styles.inputField, styles.neumorphTextInput]}
              value={weightInput}
              onChangeText={text => setWeightInput(text)}
              keyboardType="numeric"
              placeholder="0"
              placeholderTextColor="#747474"
            />
          </View>
        </View>
        <View style={styles.out}>
        <View style={styles.inputRow}>
          <MaterialCommunityIcons
            name="human-male-height"
            size={24}
            color="#FE7A36"
            style={styles.icon}
          />

          <Text style={styles.unitName}>Height (cm)</Text>
          <TextInput
            style={[styles.inputField, styles.neumorphTextInput]}
            value={heightInput}
            onChangeText={text => setHeightInput(text)}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#747474"
          />
        </View>
        </View>
       <View style={styles.out}>
       <View style={styles.inputRow}>
          <IonIcons name="body" color="#FE7A36" size={24} style={styles.icon} />
          <Text style={styles.unitName}>BMI</Text>
          <TextInput
            style={[
              styles.inputField,
              styles.neumorphTextInput,
              {backgroundColor: 'transparent', fontSize: 24},
            ]}
            value={bmiResult}
            editable={false}
          />
        </View>
       </View>
        {bmiMessage ? (
          <Text
            style={
              styles.bmiMessage
            }>{`Your BMI is ${bmiResult}. ${bmiMessage}.`}</Text>
        ) : null}
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={calculateBMI}>
        <Text style={styles.calculateButtonText}>Calculate BMI</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 30}}
        onPress={() =>
          openLink(
            'https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi_tbl.htm',
          )
        }>
        <Text style={{color: 'white'}}>See Chart for More Details</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 70,
  },
  out: {
    shadowColor: '#000000',
    shadowOffset: {width: -5, height: -4},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 40,
    height: 75,
    marginVertical: 10,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    marginLeft: 5,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#1A1A1A',
    borderRadius: 40,
    padding: 10,
    shadowColor: '#303030',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  unitName: {
    color: '#747474',
    fontSize: 18,
    marginRight: 10,
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
    shadowColor: '#1A1A1A',
    shadowOffset: {width: -2, height: -2},
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#1A1A1A',
  },
  calculateButton: {
    backgroundColor: '#FE7A36',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  calculateButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  bmiMessage: {
    marginTop: 20,
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  adContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});

export default BodyMassIndex;
