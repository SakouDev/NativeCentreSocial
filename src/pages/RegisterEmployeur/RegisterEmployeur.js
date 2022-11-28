import React, {useState, useEffect} from 'react';
import {Button, Image, SafeAreaView, Text, TextInput, View} from "react-native";
import {RegisterEmployeurStyle} from "./RegisterEmployeurStyle";
import {LoginStyle} from "../Login/LoginStyle";

const RegisterEmployeur = () => {

    return (
        <>
            <View style={LoginStyle.topDiv}>
                <Image
                    style = {LoginStyle.image}
                    source={require('../../assets/img/girl.png')}
                />
            </View>

            <View style={RegisterEmployeurStyle.container}>
                <Text>SIRET</Text>
                <TextInput
                    style={RegisterEmployeurStyle.input}
                    keyboardType="number-pad"
                />
                <Text>Adresse Mail</Text>
                <TextInput
                    style={RegisterEmployeurStyle.input}
                    keyboardType="email-address"
                />
                <Text>Mot de passe</Text>
                <TextInput
                    style={RegisterEmployeurStyle.input}
                    placeholder="MOT DE PASSE"
                    secureTextEntry={true}
                    keyboardType="password"
                />

                <Text>Confirmation mot de passe</Text>
                <TextInput
                    style={RegisterEmployeurStyle.input}
                    placeholder="MOT DE PASSE"
                    secureTextEntry={true}
                    keyboardType="password"
                />

                <View style={RegisterEmployeurStyle.button}>
                    <Button title="S'inscrire" style={RegisterEmployeurStyle.textWhite}></Button>
                </View>
            </View>
        </>
    );
};
export default RegisterEmployeur;