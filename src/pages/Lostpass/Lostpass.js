import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { Link } from 'react-router-native'
import { LostpassStyle } from './LostpassStyle'

export default function LostPass() {
  return (
    <View style={LostpassStyle.container}>
      <View style={LostpassStyle.topDiv}>
        <Image
          style={LostpassStyle.image}
          source={require('../../assets/img/lostpass.png')}
        />
      </View>
      <View style={LostpassStyle.botDiv}>
        <Text style={[LostpassStyle.textColor, LostpassStyle.title]}>Mot de passe oublié</Text>

        <Text style={{ alignSelf: "center" }} >Entrez votre adresse e-mail.</Text>

        <View style={{ marginVertical: 30, }}>
          <Text style={LostpassStyle.titleInput}>Adresse mail</Text>
          <TextInput style={LostpassStyle.input} textAlign={'center'}></TextInput>
        </View>

        <Link to={'/home'} style={LostpassStyle.buttonLog}>
          <Text style={LostpassStyle.textWhite}>Valider</Text>
        </Link>

        {/* <View>
          <Text style={LostpassStyle.textValidation} >Un email vient de vous être envoyé afin de changer votre mot de passe.</Text>
          <Link to={'/'} style={LostpassStyle.buttonLog}>
            <Text style={LostpassStyle.textWhite}>Terminer</Text>
          </Link>
        </View> */}
      </View>
    </View>
  )
}
