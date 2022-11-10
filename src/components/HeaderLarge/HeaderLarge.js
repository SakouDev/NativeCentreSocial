import React from 'react'
import { Image, View } from 'react-native'
import { Link } from 'react-router-native'
import {HeaderLargeStyle} from './HeaderLargeStyle'

export default function Header() {
    return (
        <View style={HeaderLargeStyle.container}>
            <View style={HeaderLargeStyle.containerImage}>
                <Link to={'/'}>
                    <Image
                        style = {HeaderLargeStyle.logo}
                        source={require('../../assets/img/logo-agglo-large.png')}
                    />
                </Link>
            </View>

            <Image
                style = {HeaderLargeStyle.profile}
                source={require('../../assets/img/user.png')}
            />
        </View>
    )
}