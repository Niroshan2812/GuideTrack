import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';


export default function Layout() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {

      //const token = null;
      //Check token 
      const token = await AsyncStorage.getItem('userToken')
      if (token) {
        setIsAuthenticated(true);
        router.replace('/Screen/Dashboard'); // Redirect to About if logged in
      } else {
        setIsAuthenticated(false);
        //router.replace('/Auth/Login'); // Redirect to Login if not logged in

        router.replace('/Screen/Dashboard'); 
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) return null; // Prevent flicker before checking auth

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="Auth/Login" options={{ title: 'Login' }} />
      <Stack.Screen name = "Screen/Dashboard" options={{title:'Dashboard'}}/>
      <Stack.Screen name = "Screen/StepShow" options={{title:'Step Show'}}/>
      
    </Stack>
  );
}
