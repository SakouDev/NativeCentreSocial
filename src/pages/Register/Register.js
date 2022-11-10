import React, {useState, useEffect} from 'react';
import {Image, SafeAreaView, Text, TextInput, View} from "react-native";
import {RegisterStyle} from "./RegisterStyle";
import {LoginStyle} from "../Login/LoginStyle";

const Register = () => {

    return (
<>
        <View style={LoginStyle.topDiv}>
            <Image
                style = {LoginStyle.image}
                source={require('../../assets/img/girl.png')}
            />
        </View>

        <View style={RegisterStyle.container}>
            <Text>Adresse Mail</Text>
                <TextInput
                    style={RegisterStyle.input}
                    keyboardType="email-address"
                 />
                <Text>Mot de passe</Text>
                <TextInput
                    style={RegisterStyle.input}
                    placeholder="MOT DE PASSE"
                    secureTextEntry={true}
                    keyboardType="password"
                />

                <Text>Confirmation mot de passe</Text>
                <TextInput
                    style={RegisterStyle.input}
                    placeholder="MOT DE PASSE"
                    secureTextEntry={true}
                    keyboardType="password"
                />
        </View>
</>
    );
};
export default Register;