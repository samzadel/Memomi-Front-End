import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';


const WelcomePage = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.logo} source={require('../assets/images/Logo_Memomi.png')}></Image>
            </View>
            <View style={styles.buttonContainerSignUp}>
                <TouchableOpacity style={styles.buttonSignUp}>
                    <Text style={styles.buttonSignUpText} onPress= {() => navigation.navigate('SignUp')}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin} onPress= {() => navigation.navigate('Login')}>
                    <Text style={styles.buttonLoginText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7e1bf"
      },
    buttonSignUp: {
        width:180, 
        height: 50, 
        backgroundColor: "#606060", 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 20, 
        marginTop: 70 ,
        borderRadius: 100 /2
    },
    buttonSignUpText: {
        fontSize: 28, 
        color: "white"
    },
    buttonLogin: {
        width:180, 
        height: 50, 
        backgroundColor: "#606060", 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 100 /2
    },
    buttonLoginText : {
        fontSize: 28, 
        color: "white"
    }
});

export default WelcomePage;
