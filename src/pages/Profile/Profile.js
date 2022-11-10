import React from 'react'
import { Image, Text, View, TextInput } from 'react-native'
import { ProfileStyle } from './ProfileStyle'

export default function Profile() {



  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);


  return (
    <View style={ProfileStyle.container}>
      <View style={ProfileStyle.topDiv}>
        <Image
          style={ProfileStyle.image}
          source={require('../../assets/img/girl2bis.png')}
        />
      </View>

      <View style={ProfileStyle.botDiv}>
        <Text style={[ProfileStyle.textColor, ProfileStyle.title]}>Modifier mon profil</Text>


        


        <TextInput style={ProfileStyle.input} onChangeText={onChangeText} value={text} />
        <TextInput
          style={ProfileStyle.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />





      </View>
    </View>
  )
}
