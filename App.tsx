import React from 'react';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
import { NotoSansJP_300Light, NotoSansJP_400Regular, NotoSansJP_500Medium } from '@expo-google-fonts/noto-sans-jp'
import { AppLoading } from 'expo'
import { Ubuntu_700Bold, Ubuntu_500Medium, Ubuntu_300Light, useFonts } from '@expo-google-fonts/ubuntu'
import { StatusBar } from 'react-native';
import Routes from './src/routes'
import {AuthProvider} from './src/services/contexts'


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    NotoSansJP_400Regular,
    NotoSansJP_300Light,
    NotoSansJP_500Medium,
    Ubuntu_300Light
  })

  if (!fontsLoaded) return <AppLoading />
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
