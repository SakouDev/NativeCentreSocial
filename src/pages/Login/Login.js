import React from 'react'
import {Image, SafeAreaView, Text, TextInput, View} from 'react-native'
import { Link } from 'react-router-native'

import {LoginStyle} from './LoginStyle'

export default function Login() {



    return (
        <SafeAreaView style={LoginStyle.container}>
            <View style={LoginStyle.topDiv}>
                <Image
                    style = {LoginStyle.image}
                    source={require('../../assets/img/girl.png')}
                />
            </View>
            <View style={LoginStyle.botDiv}>

                <Text style={[LoginStyle.textColor,LoginStyle.title]}>Connexion</Text>

                <View style={LoginStyle.loginGroup}>
                    <Text style={LoginStyle.titleInput}>Adresse Mail</Text>
                    <TextInput style={LoginStyle.input} textAlign={'center'}>
                        <Text style={LoginStyle.inputText}>adresse@gmail.com</Text>
                    </TextInput>
                    <Text style={LoginStyle.titleInput}>Mot de passe</Text>
                    <TextInput style={LoginStyle.input} textAlign={'center'}>
                        <Text style={LoginStyle.inputText}>*************</Text>
                    </TextInput>
                </View>

                <View style={LoginStyle.buttonGroup}>
                    <Link to={'/home'} style={LoginStyle.buttonLog}>
                        <Text style={LoginStyle.textWhite}>Connexion</Text>
                    </Link>
                    <Link to={'/statusselector'} style={LoginStyle.buttonSign}>
                        <Text style={LoginStyle.textColor}>Inscription</Text>
                    </Link>
                </View>

            </View>

        </SafeAreaView>
    )
}