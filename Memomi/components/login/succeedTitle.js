import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';


const Succeed = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/Logo_Memomi.png')}></Image>
            <Text style={styles.message}>Go to check your email</Text>
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
    message: {
        fontSize: 30
    }

});

export default Succeed;