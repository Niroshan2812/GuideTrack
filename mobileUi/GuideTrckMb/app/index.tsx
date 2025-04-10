import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useEffect } from 'react';
import { initializeDatabace } from './Config/db';

export default function Index() {
  useEffect(() => {
    initializeDatabace();
   
  },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/Screen/Dashboard" style={styles.link}>Go to About Screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  link: {
    color: '#61dafb',
    fontSize: 18,
    marginTop: 10,
  },
});
