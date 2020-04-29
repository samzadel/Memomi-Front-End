import React from 'react';
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import AsyncStorage from '@react-native-community/async-storage';
import { Formik } from 'formik';
import * as yup from 'yup';

const SignUp = ({navigation}) => {

    const SendSignUpData = (value) => {
        return fetch('http://10.0.2.2:3000/signUp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
            .then((response) => response.json())
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email required'),
        password: yup.string().required('Password required').min(5, 'Too short!').max(10, 'Too long!'),
        year_birth: yup.string().required('The year of birth is required').matches(/^(19[0-9][0-9]|20[01][0-9]|2020)$/, "Please choose a correct year of birth")
    })

    return (
        <View style={styles.container} behavior="padding">
            <HideWithKeyboard>
                <Image style={styles.logo} source={require('../../assets/images/Logo_Memomi.png')}></Image>
            </HideWithKeyboard>
            <Formik
                initialValues={{ email: '', password: '', year_birth: '' }}
                onSubmit={(values,actions)=>{
                    SendSignUpData(values).then((response)=>{
                        if(response == 'email exists'){
                            actions.setFieldError('email','This email already exists')
                        }else{
                            storeToken = async () => {
                                try {
                                  await AsyncStorage.setItem('myToken', response['token'])
                                } catch (e) {
                                    console.log(e)
                                }
                              }
                              storeToken()
                              Keyboard.dismiss()
                            navigation.navigate('menu')
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
                            <TextInput placeholder="Password" style={styles.password} onChangeText={formikProps.handleChange('password')} onBlur={formikProps.handleBlur('password')} />
                            {formikProps.errors.password && formikProps.touched.password ? <Text style={{ color: "red" }}>{formikProps.errors.password}</Text> : null}
                            <TextInput placeholder="Year of birth" style={styles.yob} onChangeText={formikProps.handleChange('year_birth')} onBlur={formikProps.handleBlur('year_birth')} />
                            {formikProps.errors.year_birth && formikProps.touched.year_birth ? <Text style={{ color: "red" }}>{formikProps.errors.year_birth}</Text> : null}
                
                            {
                                !formikProps.isValid || !formikProps.dirty ?
                                <TouchableOpacity style={[ styles.buttonPlay, { opacity: 0.7 } ]} disabled={true}>
                                    <Text style={styles.buttonPlayText}>Sign up</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.buttonPlay} onPress={formikProps.handleSubmit}>
                                    <Text style={styles.buttonPlayText}>Sign up</Text>
                                </TouchableOpacity>
                            }
                            
                            
                        </>
                    )
                }
            </Formik>
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
    email: {
        borderRadius: 100 / 2,
        marginTop: 22,
        // marginBottom: 35,
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
        // marginBottom: 35
    },
    yob: {
        borderRadius: 100 / 2,
        borderColor: "black",
        borderWidth: 1,
        width: 250,
        paddingLeft: 15,
        marginTop: 25
    },
    buttonPlay: {
        width: 180,
        height: 50,
        backgroundColor: "#606060",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 25,
        borderRadius: 100 / 2
    },
    buttonPlayText: {
        fontSize: 20,
        color: "white"
    }

});

export default SignUp;