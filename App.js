
import * as React from "react"
import { StatusBar } from 'expo-status-bar';
import COLORS from './app/components/colors';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
const Stack=createNativeStackNavigator()
import Home from "./app/screens/Home"
export default function App() {
  const loadsplashscreen=async()=>{
    await SplashScreen.hideAsync();
  }
  const shownscreen=async()=>{
    await SplashScreen.preventAutoHideAsync();
  }
  React.useEffect(()=>{
    shownscreen()
setTimeout(() => {
  loadsplashscreen()
}, 3000);
  },[])
return (
<NavigationContainer>
  <StatusBar backgroundColor={COLORS.dark} barStyle="dark-content"></StatusBar>
<Stack.Navigator  screenOptions={{headerShown: false}}>
<Stack.Screen name="Homescreen" component={Home}></Stack.Screen>
</Stack.Navigator>
</NavigationContainer>
    );
}

