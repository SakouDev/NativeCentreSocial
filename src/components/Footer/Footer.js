import React from 'react'
import { Text, View } from 'react-native'
import { FooterStyle } from './FooterStyle'

export default function Footer() {
  return (
    <View style={FooterStyle.container}>
      <Text style={FooterStyle.text}>© 2022 CAB - Mentions Légales</Text>
    </View>
  )
}
