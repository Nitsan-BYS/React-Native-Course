import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import TimerScreen from './src/screens/Timer';
import SliderWalkthrough from './src/screens/Walkthrough/SliderWalkthrough';
import DefaultModal from './src/screens/Modals/DefaultModal';
import SendCode from './src/screens/AuthCode/SendCode';
import Terms from './src/screens/Terms/Terms';
import TermsofDivor from './src/screens/Terms/TermofDivor';
import TermsofUseapp from './src/screens/Terms/TermofUseapp';
import Greeting from './src/screens/Register/Greeting';
import Form from './src/screens/Register/GreetingForm';
import RegisterForm from './src/screens/Register/RegisterForm';
import { I18nManager } from 'react-native';
I18nManager.forceRTL(false);


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide the header/title for all screens
      }}>
    <Stack.Screen name="SliderWalkthrough" component={SliderWalkthrough} />
    <Stack.Screen name="Modal" component={DefaultModal} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="AuthCode" component={SendCode} />
    <Stack.Screen name="Terms" component={Terms} />
    <Stack.Screen name="Timer" component={TimerScreen} />
    <Stack.Screen name="TermofDivor" component={TermsofDivor} />
    <Stack.Screen name="TermofUseapp" component={TermsofUseapp} />
    <Stack.Screen name="Greeting" component={Greeting} />
    <Stack.Screen name="GreetingForm" component={Form} />
    <Stack.Screen name="Register" component={RegisterForm} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}