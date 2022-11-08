import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import Footer from '../../components/Footer/Footer'
import HeaderLarge from '../../components/HeaderLarge/HeaderLarge'
import {HomeStyle} from './HomeStyle'

export default function Home() {
  return (
    <View style={HomeStyle.container}>
      <Link to={'/'}>
        <Text>Menfou</Text>
      </Link>
    </View>
  )
}