import React from 'react'
import { Image, View } from 'react-native'
import {HeaderStyle} from './HeaderStyle'

export default function Header() {
    return (
        <View style={HeaderStyle.container}>
            <View style={HeaderStyle.containerImage}>
                <Image
                    style = {HeaderStyle.logo}
                    source={require('../../assets/img/logo-agglo.png')}
                />
            </View>

            <Image
                style = {HeaderStyle.profile}
                source={require('../../assets/img/user.png')}
            />
        </View>
    )
}