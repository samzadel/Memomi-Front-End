import React from 'react';
import { StyleSheet, TextInput, Image, Text, TouchableOpacity, KeyboardAvoidingView, View, Keyboard } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import AsyncStorage from '@react-native-community/async-storage';
import { Formik } from 'formik';
import * as yup from 'yup';


const ResetFormPwd = ({ navigation }) => {

    const SendPwdData = (value) => {
        return fetch('http://10.0.2.2:3000/resetPwd', {
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
        password: yup.string().required('Password required').min(5, 'Too short!').max(10, 'Too long!'),
        confirmPwd: yup.string().required('Confirm password required').test('confirmPwd', 'The password is not equal', function (value) {
            return this.parent.password == value
        })
    })


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="-300">
            <HideWithKeyboard>
                <Image source={require('../../assets/images/Logo_Memomi.png')}></Image>
            </HideWithKeyboard>
            <Formik
                initialValues={{ password: '', confirmPwd: '' }}
                onSubmit={async (values) => {

                    delete values['confirmPwd']

                    const email = await AsyncStorage.getItem('email') // Get email from asyncStorage

                    values['email'] = email
                     
                    await AsyncStorage.removeItem('email');
                            
                    await SendPwdData(values).then((response) => {
                        console.log(values)
                        if (response == 'succeed') {
                            Keyboard.dismiss()
                            navigation.navigate("Login")
                        }
                    })
                }}
                validationSchema={validationSchema}
            >
                {
                    formikProps => (
                        <>
                            <TextInput placeholder="Your new password" style={styles.password} onChangeText={formikProps.handleChange('password')} onBlur={formikProps.handleBlur('password')} />
                            {formikProps.errors.password && formikProps.touched.password ? <Text style={{ color: "red" }}>{formikProps.errors.password}</Text> : null}
                            <TextInput placeholder="Confirm password" style={styles.password} onChangeText={formikProps.handleChange('confirmPwd')} onBlur={formikProps.handleBlur('confirmPwd')} />
                            {formikProps.errors.confirmPwd && formikProps.touched.confirmPwd ? <Text style={{ color: "red" }}>{formikProps.errors.confirmPwd}</Text> : null}
                            {
                                !formikProps.isValid || !formikProps.dirty ?
                                    <TouchableOpacity style={[styles.buttonPlay, { opacity: 0.7 }]} disabled={true}>
                                        <Text style={styles.buttonPlayText}>Reset my password</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={styles.buttonPlay} onPress={formikProps.handleSubmit}>
                                        <Text style={styles.buttonPlayText}>Reset my password</Text>
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
    password: {
        borderRadius: 100 / 2,
        marginTop: 20,
        paddingLeft: 15,
        borderColor: "black",
        borderWidth: 1,
        width: 250
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

export default ResetFormPwd;