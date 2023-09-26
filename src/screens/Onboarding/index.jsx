import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SvgComponent from '../../../assets/onboard';

function Onboarding({navigation}) {
  return (
    <View style={styles.container}>
      <SvgComponent style={styles.image} />
      <Text style={styles.text}>Take <Text style={styles.orange}>Control</Text></Text>
      <Text style={styles.text}>of Your <Text style={styles.blue}>Finance!</Text></Text>
      <Text style={styles.details}>Effortlessly budget, save, and spend wisely with our all-in-one app</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Home")}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  image: {
    resizeMode: 'stretch',
    width: 200,
    height: 290,
  },
  text: {
    fontSize: 35,
    textAlign: 'justify',
    fontWeight: 'bold',
    letterSpacing: .3,
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#0066ff',
    padding: 15,
    borderRadius: 100,
    marginTop: 20,
    width: 220,
    justifyContent: 'center',
    // backgroundColor: 'blue',
    
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 2,
  },
  details: {
    textAlign: 'center',
    padding: 10,
    letterSpacing: 1,
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#808c8b'
  },
  orange: {
    color: '#ed862d'
  },
  blue: {
    color: '#3daec4'
  }
});

export default Onboarding;