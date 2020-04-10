import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Switch } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const fieldInput = ({ formikProps, formikKey, ...rest }) => {
    const inputStyles = {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginBottom: 3,
    };
  
    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
      inputStyles.borderColor = 'red';
    }
  
    return (
      <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
        <Text style={{ marginBottom: 3 }}>{label}</Text>
        <TextInput
          style={inputStyles}
          onChangeText={formikProps.handleChange(formikKey)}
          onBlur={formikProps.handleBlur(formikKey)}
          {...rest}
        />
        <Text style={{ color: 'red' }}>
          {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </Text>
      </View>
    );
  };

export default fieldInput;