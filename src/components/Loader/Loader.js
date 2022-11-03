import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import {LoaderStyle} from './LoaderStyle'

export default function Loader({setLoading}) {
    return (
        <View style={LoaderStyle.container}>
            {/* Pressable temporaire pour les essaies. */}
            <Pressable onPress={() => setLoading(false)}>
                <View style={LoaderStyle.containerImage}>
                    <Image
                        style = {LoaderStyle.image}
                        source={require('../../assets/img/logo-agglo.png')} 
                        />
                </View>
            </Pressable>
        </View>
    )
}
