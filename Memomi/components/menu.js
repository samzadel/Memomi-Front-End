import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';


const menu = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.buttonProfile}>
                    <Icon name="user-circle-o" color="#000CCC" size={40} style={styles.iconProfile}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonProfile}>
                    <Icon2 name="player-settings" color="#000CCC" size={40} style={styles.iconSetting} />
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <Text style={styles.baseText}> Hello, you ! </Text>
            </View>
            <View style={styles.container3}>
                 <TouchableOpacity style={styles.buttonPlay}>
                     <Text style={styles.buttonPlayText} onPress= {() => navigation.navigate('Game')}>Let's play</Text>
                 </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffece5"
    },
    container1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    container2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    container3: {
        flex: 4,
        alignItems: "center"
    },
    iconProfile: {
        marginTop: 10,
        marginLeft: 10
    },
    iconSetting: {
        marginTop: 10,
        marginRight: 10
    },
    imageJeux: {
        aspectRatio: 0.6,
        marginBottom: 100,
        resizeMode: 'contain',
    },
    baseText: {
        fontFamily: "notoserif",
        fontWeight: "bold",
        fontSize: 40,
        color: "#152d7d"
    },
    buttonPlay: {
        borderRadius: 10,
        position: "absolute",
        marginTop: 150,
        marginLeft: 40,
        width: 200,
        height: 70,
        backgroundColor: "#494949",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "black",
    },
    buttonPlayText: {
        fontWeight: "bold",
        fontSize: 29,
        color: "white"
    }

});

export default menu;