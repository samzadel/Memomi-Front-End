import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './components/welcomePage';
import Login from './components/logIn';
import SignUp from './components/signUp/signUp';
import menu from './components/menu';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={WelcomePage}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="menu" component={menu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

};


const styles = StyleSheet.create({
  
});



export default App;
