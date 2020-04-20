import React from 'react';
import { StyleSheet, TextInput, Image, Text, TouchableOpacity, KeyboardAvoidingView, View, Keyboard } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import AsyncStorage from '@react-native-community/async-storage';
import { Formik } from 'formik';
import * as yup from 'yup';


const ForgotPwd = ({ navigation }) => {

    const test = (value) => {
        return fetch('http://10.0.2.2:3000/ForgotPwd', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then((response) => response.json())
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email required'),
    })


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="-300">
            <HideWithKeyboard>
                <Image source={require('../../assets/images/Logo_Memomi.png')}></Image>
            </HideWithKeyboard>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={(values, actions) => {
                    test(values).then((response) => {
                        if (response == 'Email doesn\'t found') {
                            actions.setFieldError('email', 'The email is invalid')
                        }
                        if (response == 'succeed') {
                            Keyboard.dismiss()
                            navigation.navigate("Succeed")
                            
                        }
                    })
                }}
                validationSchema={validationSchema}
            >
                {
                    formikProps => (
                        <>
                            <TextInput placeholder="Email" style={styles.email} onChangeText={formikProps.handleChange('email')} onBlur={formikProps.handleBlur('email')} />
                            {formikProps.errors.email && formikProps.touched.email ? <Text style={{ color: "red" }}>{formikProps.errors.email}</Text> : null}
                            {
                                !formikProps.isValid || !formikProps.dirty ?
                                    <TouchableOpacity style={[styles.buttonPlay, { opacity: 0.7 }]} disabled={true}>
                                        <Text style={styles.buttonPlayText}>Send a new password</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={styles.buttonPlay} onPress={formikProps.handleSubmit}>
                                        <Text style={styles.buttonPlayText}>Send a new password</Text>
                                    </TouchableOpacity>
                            }
                        </>
                    )
                }
            </Formik>
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
        marginTop: 20,
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
        marginTop: 25
    },
    forgot: {
        marginTop: 6,
        paddingLeft: 15
    },
    buttonPlay: {
        width: 250,
        height: 50,
        backgroundColor: "#606060",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 100 / 2
    },
    buttonPlayText: {
        fontSize: 20,
        color: "white"
    }

});

export default ForgotPwd;