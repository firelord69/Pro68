import { StatusBar } from 'expo-status-bar';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs'
import React from 'react';
import Facebook from './screens/Facebook';
import Instagram from './screens/Instagram';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   
      <Fidias/>
      
  
  );
}

const AirRack = createBottomTabNavigator({
  Facebook: {screen:Facebook},
  Instagram: {screen:Instagram}
})

const Fidias = createAppContainer(AirRack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
