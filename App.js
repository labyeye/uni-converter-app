import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Calculator from './src/screens/Calculator/Calculator';
import Converter from './src/screens/Converter/Converter';
import { CalculatorIcon ,ArrowPathIcon,HomeIcon} from 'react-native-heroicons/outline';
import Dashboard from './src/screens/Dashboard/Dashboard';



const Drawer = createDrawerNavigator();

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
          name="Converter"
          component={Converter}
          options={{
            drawerIcon: ({ color, size }) => (
              <ArrowPathIcon color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
