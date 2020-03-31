import React from 'react';
import { StyleSheet, TextInput, Image, Text, TouchableOpacity, View } from 'react-native';


const menu = () => {


    return (
        <View style={styles.container}>
            <Text style={styles.baseText}> Hello, </Text>
            <Image source={require('../assets/images/unnamed.gif')}></Image>
            <TextInput placeholder="Password" style={styles.password} />
            <Text style={styles.forgot}>Forgot Password ?</Text>
            <TouchableOpacity style={styles.buttonPlay}>
                <Text style={styles.buttonPlayText}>Let's play!</Text>
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
    baseText: {
        alignItems: "center",
        justifyContent: "center",
        color: "#606060"
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
        width: 180,
        height: 50,
        backgroundColor: "#606060",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 100 / 2
    },
    buttonPlayText: {
        fontSize: 20,
        color: "white"
    }

});

export default menu;