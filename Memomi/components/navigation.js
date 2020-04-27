import * as React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import WelcomePage from './welcomePage';
import Login from './login/logIn';
import SignUp from './signUp/signUp';
import menu from './menu';
import ForgotPwd from './login/ForgotPwd'
import Succeed from './login/succeedTitle'
import Game from './game/game'

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('myToken')
      console.log(value)
      if(value !== null) {
        return true
      }
    } catch(e) {
      console.log(e)
    }
  }

const MyNavigation = () => {
  const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={WelcomePage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="menu" component={menu} />
            <Stack.Screen name="ForgotPwd" component={ForgotPwd} />
            <Stack.Screen name="Succeed" component={Succeed} />
            <Stack.Screen name="Game" component={Game} />
        </Stack.Navigator>
    )
}

export default MyNavigation;