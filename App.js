import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './src/screens/Calculator/Calculator';
import Converter from './src/screens/Converter/Converter';
import Length from './src/screens/Converter/Length/Length';
import Dashboard from './src/screens/Dashboard/Dashboard';
import { CalculatorIcon, ArrowPathIcon, HomeIcon } from 'react-native-heroicons/outline';
import Weight from './src/screens/Converter/Weight/Weight';
import Temperature from './src/screens/Converter/Temperature/Temperature';

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

  </Stack.Navigator>
);

const App = () => {
  const { height } = useWindowDimensions();
  const tabBarPaddingTop = height * 0.05;

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Calculator"
          component={Calculator}
          options={{
            drawerIcon: ({ color, size }) => (
              <CalculatorIcon color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="ConverterStack"
          component={ConverterStack}
          options={{
            drawerIcon: ({ color, size }) => (
              <ArrowPathIcon color={color} size={size} />
            ),
            title: 'Converter'
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
