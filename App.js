import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SvgComponent from './assets/onboard';
import Index from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { InitialNavigator } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <InitialNavigator />
    </NavigationContainer>
    
  );
}