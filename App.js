import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './src/screens/Calculator/Calculator';
import Converter from './src/screens/Converter/Converter';
import Length from './src/screens/Converter/Length/Length';
import Dashboard from './src/screens/Dashboard/Dashboard';
import { CalculatorIcon, ArrowPathIcon, HomeIcon } from 'react-native-heroicons/outline';
import Weight from './src/screens/Converter/Weight/Weight';
import Temperature from './src/screens/Converter/Temperature/Temperature';
import Speed from './src/screens/Converter/Speed/Speed';
import Time from './src/screens/Converter/Time/Time';
import Power from './src/screens/Converter/Power/Power';
import Pressure from './src/screens/Converter/Pressure/Pressure';
import Volume from './src/screens/Converter/Volume/Volume';
import Area from './src/screens/Converter/Area/Area';
import { FunnelIcon, UserIcon } from 'react-native-heroicons/solid';
import BodyMassIndex from './src/screens/Body/Body';
import Milage from './src/screens/Milage/Milage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Discount from './src/screens/Discount/Discount';
import SimpleInterest from './src/screens/SimpleIntrest/Simple';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ConverterStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false, // Hide the header for all screens in this navigator
    }}
  >
    <Stack.Screen name="Converter" component={Converter} />
    <Stack.Screen name="Length" component={Length} options={{ title: 'Length' }} />
    <Stack.Screen name="Weight" component={Weight} options={{ title: 'Weight' }} />
    <Stack.Screen name="Temperature" component={Temperature} options={{ title: 'Temperature' }} />
    <Stack.Screen name="Speed" component={Speed} options={{ title: 'Speed' }} />
    <Stack.Screen name="Time" component={Time} options={{ title: 'Time' }} />
    <Stack.Screen name="Power" component={Power} options={{ title: 'Power' }} />
    <Stack.Screen name="Pressure" component={Pressure} options={{ title: 'Pressure' }} />
    <Stack.Screen name="Volume" component={Volume} options={{ title: 'Volume' }} />
    <Stack.Screen name="Area" component={Area} options={{ title: 'Area' }} />
    <Stack.Screen name="Discount" component={Discount} options={{ title: 'Discount' }} />

  </Stack.Navigator>
);

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const App = () => {
  const { height } = useWindowDimensions();
  const tabBarPaddingTop = height * 0.05;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#1A1A1A', // Change drawer background color
          },
          drawerActiveTintColor: '#FE7A36', // Active item label color
          drawerInactiveTintColor: '#747474', // Inactive item label color
          drawerLabelStyle: {
            fontSize: 18,
          },
        }}
      >
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            ),
            headerTitleAlign:'left',
            headerStyle:{
              backgroundColor:'#1A1A1A'
            },
            headerTintColor:'white'

          }}
        />
        <Drawer.Screen
          name="Calculator"
          component={Calculator}
          options={{
            drawerIcon: ({ color, size }) => (
              <CalculatorIcon color={color} size={size} />
            ),
            title: 'Calculator',
            headerTitleAlign:'left',
            headerStyle:{
              backgroundColor:'#1A1A1A'
            },
            headerTintColor:'white'
            

          }}
        />
        <Drawer.Screen
          name="ConverterStack"
          component={ConverterStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <ArrowPathIcon color={color} size={size} />
            ),
            title: 'Converter',
            headerTitleAlign:'left',
            headerStyle:{
              backgroundColor:'#1A1A1A'
            },
            headerTintColor:'white'
          }}
        />
        <Drawer.Screen
          name="BodyMassIndex"
          component={BodyMassIndex}
          options={{
            drawerIcon: ({ color, size }) => (
              <IonIcons name='body' size={size} color={color}/>
            ),
            title: 'BMI',
            headerTitleAlign:'left',
            headerStyle:{
              backgroundColor:'#1A1A1A'
            },
            headerTintColor:'white'

          }}
        />
        <Drawer.Screen
          name="Milage"
          component={Milage}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='fuel' size={size} color={color}/>
            ),
            title: 'Milage',
            headerTitleAlign:'left',
            headerStyle:{
              backgroundColor:'#1A1A1A'
            },
            headerTintColor:'white'

          }}
        />
        <Drawer.Screen
          name="Discount"
          component={Discount}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='brightness-percent' size={size} color={color}/>
            ),
            title: 'Discount',
            headerTitleAlign:'left',
            headerStyle:{
              backgroundColor:'#1A1A1A'
            },
            headerTintColor:'white'

          }}
        />
        <Drawer.Screen
          name="Simple"
          component={SimpleInterest}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='label-percent' size={size} color={color}/>
            ),
            title: 'Simple Interest',
            headerTitleAlign:'left',
            headerStyle:{
              backgroundColor:'#1A1A1A'
            },
            headerTintColor:'white'

          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
