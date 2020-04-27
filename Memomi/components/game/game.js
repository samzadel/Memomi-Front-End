
import React, { useState } from 'react';
import {
    StyleSheet, View, Text, Image, Alert,TouchableOpacity} from 'react-native';
import Images from './indexImage';
import { color } from 'react-native-reanimated';
//import Question from './Question';


const Game= () => {
    const [count, updateCount] = useState(1)
    var casebleu = [];
    for (let i = 1; i < 26; i++) {
        casebleu.push(
            <Image source={Images.bloc["bloc1"]} style={styles.bloc} key={i} />
        )
    }
    return (
        <>
            <View style={styles.containerMenu}>
                <View style={styles.containerMenu_Left}>
                    <View style={styles.score}><Text style={styles.text_score}> 12500</Text></View>
                </View>
                <View style={styles.containerMenu_Center}>
                    <TouchableOpacity style={styles.Find_it} onPress={() => Alert.alert('You are you')}><Text style={styles.text_Find_it}>Find it !</Text></TouchableOpacity>
                </View>
                <View style={styles.containerMenu_Right}>
                    <Image source={require('../../assets/imageGame/settings.png')} style={styles.icon_Reglage} />
                </View>
            </View>
            <View style={styles.containerImage}>
                <Image source={Images["image" + "1"]} style={styles.backgroundImage} />
                {casebleu}
            </View>
            <View style={styles.containerQR}>
                <View style={styles.containerQ}>
                    <Text style={styles.question}>
                        Quelle est la capitale de la France ?
          </Text>
                </View>
                <View style={styles.containerReponse}>
                    <View style={styles.containerR_divise_en_deux_hauteur}>
                        <View style={styles.containerR_divise_en_deux_largeur}>
                            <View style={styles.containerR_style}>
                                <Text style={styles.textReponse}> Paris  </Text>
                            </View>
                        </View>
                        <View style={styles.containerR_divise_en_deux_largeur}>
                            <View style={styles.containerR_style}>
                                <Text style={styles.textReponse}>Londres</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerR_divise_en_deux_hauteur}>
                        <View style={styles.containerR_divise_en_deux_largeur}>
                            <View style={styles.containerR_style}>
                                <Text style={styles.textReponse}>Tel aviv</Text>
                            </View>
                        </View>
                        <View style={styles.containerR_divise_en_deux_largeur}>
                            <View style={styles.containerR_style}>
                                <Text style={styles.textReponse}>Maldive</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    containerMenu: {
        backgroundColor: "#f7e8dd",
        flex: 7,
        flexDirection: "row",
    },
    score: {
        marginTop: 5,
        marginLeft: 5,
        height: 40,
        width: 80,
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    Find_it: {
        marginTop: 10,
        marginLeft: 15,
        height: 40,
        width: 120,
        borderRadius: 10,
        backgroundColor: "#eba607",
        alignItems: "center",
        justifyContent: "center",
    },
    icon_Reglage: {
        marginTop: 5,
        height: 40,
        width: 40,
    },
    bloc: {
        height: "20%",
        width: "20%",
        borderWidth: 1,
        borderColor: "black",
    },
    containerMenu_Left: {
        backgroundColor: "#f7e8dd",
        flex: 1,
        margin: 5,
        fontWeight: "bold",
        // borderWidth : 5,
        // borderColor : "red",
    },
    containerMenu_Right: {
        flex: 1,
        margin: 5,
        // borderWidth : 5,
        // borderColor : "#fff",
        alignItems: "flex-end",
    },
    containerMenu_Center: {
        flex: 1,
        backgroundColor: "#f7e8dd",
        // borderWidth: 5,
        // borderColor: "red",
    },
    containerImage: {
        flex: 32,
        backgroundColor: "#f7e8dd",
        flexWrap: "wrap",
        marginRight: 15,
        marginLeft: 15,
        borderColor: "black",
        borderWidth: 3,
    },
    containerQR: {
        flex: 28,
        backgroundColor: "#f7e8dd",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'stretch',
    },
    containerReponse: {
        flex: 4,
        backgroundColor: "#f7e8dd",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'stretch',
    },
    containerQ: {
        paddingTop: 5,
        flex: 1,
        backgroundColor: "#f7e8dd",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'stretch',
    },
    containerR_divise_en_deux_hauteur: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#f7e8dd",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'stretch',
    },
    containerR_divise_en_deux_largeur: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 18,
        flexDirection: "row",
        backgroundColor: "#363434",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: 'stretch',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 13,
    },
    containerR_style: {
    },
    title: {
        fontSize: 40,
    },
    question: {
        fontSize: 20,
        fontWeight: "bold",
    },
    reponse: {
        fontSize: 15,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: "absolute",
    },
    text_Find_it: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text_score: {
        fontSize: 15,
        fontWeight: "bold",
    },
    gras: {
        fontWeight: "bold",
    },
    textReponse:{
        color:"white"
    }
});

export default Game;