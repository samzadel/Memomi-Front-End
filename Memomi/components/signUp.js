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
                <TextInput placeholder="Username" style={styles.username} />
                <TextInput placeholder="Year of birth" style={styles.yob} />
            </View>
            
            <View style={styles.PlayContainer}>
                <TouchableOpacity style={styles.buttonPlay}>
                    <Text style={styles.buttonPlayText}>Sign up</Text>
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
        flex: 1,
        justifyContent: "center"
    },
    inputContainer: {
        flex: 1
    },
    email: {
        borderRadius: 100 / 2,
        marginTop: 22,
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
        paddingLeft: 15,
        marginBottom: 35
    },
    username: {
        borderRadius: 100 / 2,
        borderColor: "black",
        borderWidth: 1,
        width: 250,
        paddingLeft: 15,
        marginBottom: 35
    },
    yob: {
        borderRadius: 100 / 2,
        borderColor: "black",
        borderWidth: 1,
        width: 250,
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
        flex:1,
        justifyContent: "flex-end"
    }

});

export default SignUp;