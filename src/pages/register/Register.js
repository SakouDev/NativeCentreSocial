import React, {useState, useEffect} from 'react';
import {Image, SafeAreaView, Text, TextInput, View} from "react-native";
import {RegisterStyle} from "./RegisterStyle";

const Register = () => {




    return (
        <View style={RegisterStyle.container}>

            <View style={RegisterStyle.topDiv}>
            <Image
                style = {RegisterStyle.image}
                source={require('../../assets/img/girl2bis.png')}
            />
        </View>
            <View style={RegisterStyle.botDiv}>
            </View>




            <TextInput
                style={RegisterStyle.input}
                keyboardType="email-address"
            />

            <TextInput
                style={RegisterStyle.input}
                placeholder="MOT DE PASSE"
                secureTextEntry={true}
                keyboardType="password"
            />
        </View>
    );
};
export default Register;