import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function AboutScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken'); // Remove token
    router.replace('/Auth/Login'); // Redirect to Login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
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
});
