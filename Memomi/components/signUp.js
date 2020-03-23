import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Text,TouchableOpacity } from 'react-native';


const SignUp = () => {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/images/Logo_Memomi.png')}></Image>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Email" style={styles.email} />
                <TextInput placeholder="Password" style={styles.password} />
                <Text style={styles.forgot}>Forgot Password ?</Text>
            </View>
            <View style={styles.PlayContainer}>
                <TouchableOpacity style={styles.buttonPlay}>
                    <Text style={styles.buttonPlayText}>Let's play!</Text>
                </TouchableOpacity>
            </View>
        </View >
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
        marginBottom: 20, 
        marginTop: 70 ,
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

export default SignUp;