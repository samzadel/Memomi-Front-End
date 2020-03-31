import React from 'react';
import { StyleSheet, TextInput, Image, Text,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

const Login = ({navigation}) => {


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="-300">
                <HideWithKeyboard>
                    <Image source={require('../assets/images/Logo_Memomi.png')}></Image>
                </HideWithKeyboard>
                <TextInput placeholder="Email" style={styles.email} />
                <TextInput placeholder="Password" style={styles.password} />
                <Text style={styles.forgot}>Forgot Password ?</Text>
                <TouchableOpacity style={styles.buttonPlay}  onPress= {() => navigation.navigate('menu')}>
                    <Text style={styles.buttonPlayText}>Log In!</Text>
                </TouchableOpacity>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7e1bf"
    },
    email: {
        borderRadius: 100 / 2,
        marginTop:20,
        marginBottom: 35,
        paddingLeft: 15,
        borderColor: "black",
        borderWidth: 1,
        width: 250
    },
    password: {
        borderRadius: 100 / 2,
        borderColor: "black",
        borderWidth: 1,
        width: 250,
        paddingLeft: 15
    },
    forgot: {
        marginTop: 6,
        paddingLeft: 15
    },
    buttonPlay: {
        width:180, 
        height: 50, 
        backgroundColor: "#606060", 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 50 ,
        borderRadius: 100 /2
    },
    buttonPlayText: {
        fontSize: 20, 
        color: "white"
    }

});

export default Login;