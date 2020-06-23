import React from 'react';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { AppLoading } from 'expo'
import { Ubuntu_700Bold,Ubuntu_500Medium, useFonts } from '@expo-google-fonts/ubuntu'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Routes from './src/routes'


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  })

  if (!fontsLoaded) return <AppLoading />
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
