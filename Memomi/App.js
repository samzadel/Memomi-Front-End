import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import WelcomePage from './components/welcomePage';
import Login from './components/login/logIn';
import SignUp from './components/signUp/signUp';
import menu from './components/menu';
import ForgotPwd from './components/login/ForgotPwd'
import Succeed from './components/login/succeedTitle'


const Stack = createStackNavigator();

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

const App = () => {
  return (
    // <NavigationContainer>
    //   {
    //     getData() == true ?
    //     <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Home" component={WelcomePage}/>
    //     <Stack.Screen name="Login" component={Login}/>
    //     <Stack.Screen name="SignUp" component={SignUp}/>
    //     <Stack.Screen name="menu" component={menu}/>
    //   </Stack.Navigator>
    //   :
    //   <Stack.Navigator initialRouteName="menu" screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Home" component={WelcomePage}/>
    //     <Stack.Screen name="Login" component={Login}/>
    //     <Stack.Screen name="SignUp" component={SignUp}/>
    //     <Stack.Screen name="menu" component={menu}/>
    //   </Stack.Navigator>
    //   }
      
    // </NavigationContainer>

   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
       <Stack.Screen name="Home" component={WelcomePage}/>
       <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name="SignUp" component={SignUp}/>
       <Stack.Screen name="menu" component={menu}/>
       <Stack.Screen name="ForgotPwd" component={ForgotPwd}/>
       <Stack.Screen name="Succeed" component={Succeed}/>
     </Stack.Navigator>
    </NavigationContainer>
  );

};


const styles = StyleSheet.create({
  
});



export default App;
