import React from 'react'
import { Image, Text, View } from 'react-native'
import { Link } from 'react-router-native'

import {LoginStyle} from './LoginStyle'

export default function Login() {

  

    return (
        <View style={LoginStyle.container}>
            {/* <View style={LoginStyle.topDiv}>
                <Image
                    style = {LoaderStyle.image}
                    source={require('../../assets/img/logo-agglo.png')} 
                />
            </View>
            <View style={LoginStyle.botDiv}>

            </View> */}

            <Link to={'/home'} style={LoginStyle.button}>
                <Text>Connexion</Text>
            </Link>

        </View>
    )
}
