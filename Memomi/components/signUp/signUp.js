import React from 'react';
import { StyleSheet, View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { Formik } from 'formik';
import * as yup from 'yup';
import fieldInput from './FieldInput/fieldInput'

const SignUp = () => {
    // const [value, onChangeText] = useState(
    //     {
    //         email: '',
    //         password: '',
    //         username: '',
    //         year_birth: ''
    //     }
    // );
    

    const test = () => {
        return fetch('http://10.0.2.2:3000/hava', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(value)
         })
         .then((response) => response.json())
         .then((response) => {
            console.log(response);
         }) 
         .catch((error) => { 
            console.error(error);
         }); 
    };

    const validationSchema = yup.object().shape({
        email : yup.string().email('Invalid email').required('Email required'),
        password: yup.string().required('Password required').min(5,'Too short!').max(10,'Too long!'),
        // username: yup.string().required('Username required').matches(/[^A-Za-z0-9]+/,"Must contain only letters and numbers"),
        // year_birth: yup.string().required('The year of birth is required').matches(/^(19[0-9][0-9]|20[01][0-9]|2020)$/,"Please choose a correct year of birth")
    })

    return ( 
        <View style={styles.container} behavior="padding">
            <HideWithKeyboard>
                <Image style={styles.logo} source={require('../../assets/images/Logo_Memomi.png')}></Image>
            </HideWithKeyboard>
            <Formik 
                initialValues={{ email: '', password: '', username: '', year_birth: '' }}
                onSubmit = {(values)=>{
                    console.log(values)
                }}
                validationSchema = {validationSchema}
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, errors, touched, isValid }) => (
                    <>     
                       <TextInput placeholder="Email" style={styles.email} onChangeText={handleChange('email')} onBlur={handleBlur('email')} />
                    {errors.email && touched.email ? <Text style={{color: "red"}}>{ errors.email}</Text> : null}
                        <TextInput placeholder="Password" style={styles.password} onChangeText={handleChange('password')} onBlur={handleBlur('password')} />
                    {errors.password && touched.password ? <Text style={{ color: "red"}}>{ errors.password }</Text> : null }
                        <fieldInput formikProps={handleChange,handleBlur} formikKey="username"/>
                        <TouchableOpacity style={styles.buttonPlay} onPress={handleSubmit} disabled={!isValid}>
                            <Text style={styles.buttonPlayText}>Sign up</Text>
                        </TouchableOpacity>
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