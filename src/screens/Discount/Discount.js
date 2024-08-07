import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

const Discount = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');

  const calculateDiscount = () => {
    const originalPriceNum = parseFloat(originalPrice);
    const discountPercentNum = parseFloat(discountPercent);

    if (!isNaN(originalPriceNum) && !isNaN(discountPercentNum)) {
      const discount = (originalPriceNum * discountPercentNum) / 100;
      const finalPrice = originalPriceNum - discount;
      setDiscountedPrice(finalPrice.toFixed(2));
    } else {
      setDiscountedPrice('');
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
              <IonIcons
                name="pricetag"
                color="black"
                size={24}
                style={styles.icon}
              />
              <Text style={styles.unitName}>Original Price</Text>
              <TextInput
                style={[styles.inputField, styles.neumorphTextInput]}
                value={originalPrice}
                onChangeText={text => setOriginalPrice(text)}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#747474"
              />
            </View>
          </View>
          <View style={styles.out}>
            <View style={styles.inputRow}>
              <MaterialCommunityIcons
                name="brightness-percent"
                color="black"
                size={24}
                style={styles.icon}
              />
              <Text style={styles.unitName}>Discount (%)</Text>
              <TextInput
                style={[styles.inputField, styles.neumorphTextInput]}
                value={discountPercent}
                onChangeText={text => setDiscountPercent(text)}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor="#747474"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.calculateButton}
          onPress={calculateDiscount}>
          <Text style={styles.calculateButtonText}>Calculate Discount</Text>
        </TouchableOpacity>

        <View style={styles.outneomorph}>
          <View style={[styles.resultContainer, styles.neumorphResult]}>
            <Text style={styles.resultText}>
              Before Discount: {originalPrice || '      --'}
            </Text>
            <Text style={styles.resultText}>
              Discount Percent: {discountPercent || '    --'}%
            </Text>
            <Text style={styles.resultText}>
              After Discount: {discountedPrice || '         --'}
            </Text>
          </View>
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
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 20,
  },
  adContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  out: {
    shadowColor: '#00A9FF',
    shadowOffset: {width: -5, height: -4},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 40,
    height: 60,
    marginVertical: 14,
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
    borderRadius: 40,
    padding: 10,
    shadowColor: '#A0E9FF',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1,
    shadowRadius: 6,
    width: '100%',
    height: '100%',
  },
  unitName: {
    color: '#747474',
    fontSize: 15,
    marginRight: 10,
    width: 120,
  },
  inputField: {
    color: '#00A9FF',
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
  calculateButton: {
    backgroundColor: '#A0E9FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
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
  resultContainer: {
    marginTop: 30,
    width: '90%',
    alignItems: 'left',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#A0E9FF',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 1,
    shadowRadius: 6,
    backgroundColor: '#89CFF3',
  },
  resultText: {
    color: '#747474',
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'left',
  },
  neumorphResult: {
    shadowColor: '#A0E9FF',
    shadowOffset: {width: -6, height: -4},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    backgroundColor: '#89CFF3',
  },
  icon: {
    marginRight: 10,
    marginLeft: 5,
  },
  outneomorph: {
    height: 140,
    shadowColor: '#00A9FF',
    shadowOffset: {width: 1, height: 28},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: '#89CFF3',
  },
});

export default Discount;
