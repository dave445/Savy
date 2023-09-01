import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SvgComponent from './assets/onboard';

export default function App() {
  return (
    <View style={styles.container}>
      <SvgComponent style={styles.image} />
      <Text style={styles.text}>Take Control</Text>
      <Text style={styles.text}>of Your Finance!</Text>
      <Text style={styles.details}>Effortlessly budget, save, and spend wisely with our all-in-one app</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontxt}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  image: {
    resizeMode: 'stretch',
    width: 200,
    height: 290,
  },
  text: {
    fontSize: 33,
    textAlign: 'justify',
    fontWeight: 'bold',
    letterSpacing: .3,
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    borderRadius: 100,
    marginTop: 20
  },
  buttontxt: {
    fontSize: 20,
  },
  details: {
    textAlign: 'center',
    padding: 10,
    letterSpacing: 1,
    fontFamily: 'areal',
    fontSize: 10
  }
});
