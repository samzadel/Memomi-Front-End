import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Text,TouchableOpacity, Animated, KeyboardAvoidingView } from 'react-native';


const Login = () => {

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="-300">
                <Image style={styles.logo} source={require('../assets/images/Logo_Memomi.png')}></Image>
                <TextInput placeholder="Email" style={styles.email} />
                <TextInput placeholder="Password" style={styles.password} />
                <Text style={styles.forgot}>Forgot Password ?</Text>
                <TouchableOpacity style={styles.buttonPlay}>
                    <Text style={styles.buttonPlayText}>Let's play!</Text>
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
    logoContainer: {
        flex: 2,
        justifyContent: "center"
    },
    inputContainer: {
        flex: 1
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
        // marginBottom: 20, 
        marginTop: 50 ,
        borderRadius: 100 /2
    },
    buttonPlayText: {
        fontSize: 20, 
        color: "white"
    },
    PlayContainer:{
        flex:2,
        // justifyContent:
    }

});

export default Login;