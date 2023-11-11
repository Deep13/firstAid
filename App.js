/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Steps from './src/screens/Steps';
import Kits from './src/screens/Kits';
import Emergency from './src/screens/Emergency';
import Details from './src/screens/Details';
import Vocab from './src/screens/Vocab';
import KitInfo from './src/screens/KitInfo';
import Categories from './src/screens/Categories';
import VehicleKits from './src/screens/VehicleKits';
import TravelKits from './src/screens/TravelKits';
import VocabTypes from './src/screens/VocabTypes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Steps" component={Steps} />
        <Stack.Screen name="Kits" component={Kits} />
        <Stack.Screen name="Vocab" component={Vocab} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="KitInfo" component={KitInfo} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="VehicleKits" component={VehicleKits} />
        <Stack.Screen name="TravelKits" component={TravelKits} />
        <Stack.Screen name="VocabTypes" component={VocabTypes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
