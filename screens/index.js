import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SvgComponent from './assets/onboard';

function index() {
  return (
    <View style={styles.container}>
      <SvgComponent style={styles.image} />
      <Text style={styles.text}>Take <Text style={styles.orange}>Control</Text></Text>
      <Text style={styles.text}>of Your <Text style={styles.blue}>Finance!</Text></Text>
      <Text style={styles.details}>Effortlessly budget, save, and spend wisely with our all-in-one app</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index