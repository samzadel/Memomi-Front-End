import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

const SignUp = () => {
    const [value, onChangeText] = useState(
        {
            email: '',
            password: '',
            username: '',
            year_birth: ''
        }
    );

    const test = () => {
        return fetch('http://10.0.2.2:3000/hava', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             }
         })
         .then((response) => response.json())
         .then((response) => {
            console.log(response);
         }) 
         .catch((error) => {
            console.error(error);
         });
    };

    return ( 
        <View style={styles.container} behavior="padding">
            <HideWithKeyboard>
                <Image style={styles.logo} source={require('../assets/images/Logo_Memomi.png')}></Image>
            </HideWithKeyboard>
            <TextInput placeholder="Email" style={styles.email} onChangeText={text => onChangeText({ ...value, email: text })} />
            <TextInput placeholder="Password" style={styles.password} onChangeText={text => onChangeText({ ...value, password: text })} />
            <TextInput placeholder="Username" style={styles.username} onChangeText={text => onChangeText({ ...value, username: text })} />
            <TextInput placeholder="Year of birth" style={styles.yob} onChangeText={text => onChangeText({ ...value, year_birth: text })} />
            <TouchableOpacity style={styles.buttonPlay} onPress={test}>
                <Text style={styles.buttonPlayText}>Sign up</Text>
            </TouchableOpacity>
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
    // logo: {
    //     marginTop:15
    // },
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
        paddingLeft: 15,
        marginBottom: 35
    },
    buttonPlay: {
        width: 180,
        height: 50,
        backgroundColor: "#606060",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 100 / 2
    },
    buttonPlayText: {
        fontSize: 20,
        color: "white"
    }

});

export default SignUp;