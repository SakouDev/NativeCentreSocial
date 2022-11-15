import React, { useState, useEffect } from 'react'
import { Image, Text, View, ScrollView, Pressable, Button } from 'react-native'
import SuccessModif from '../../components/SucessModif/SuccessModif'
import ProfilePage from './ProfilePage'
import ProfileDiplome from '../../components/ProfileDiplome/ProfileDiplome'
import ProfileDispo from '../../components/ProfileDispo/ProfileDispo'
import ProfileGenerale from '../../components/ProfileGenerale/ProfileGenerale'
import { ProfileStyle } from './ProfileStyle'


export default function Profile() {
  const [profilePage, setProfilePage] = useState(1)

  useEffect(() => {
    console.log(profilePage);
    
  }, [profilePage])

  return (
    <View style={ProfileStyle.container}>
      <View style={ProfileStyle.topDiv}>
        <Image
          style={ProfileStyle.image}
          source={require('../../assets/img/girl2bis.png')}
        />
      </View>

      <ScrollView style={ProfileStyle.botDiv}>


        <Text style={[ProfileStyle.textColor, ProfileStyle.title]}>Modifier mon profil</Text>

    {/* <ProfilePage profilePage={profilePage} /> */}
    <ProfileGenerale />
    <ProfileDiplome />
    <ProfileDispo />

        <View style={{ margin: 30, flexDirection: "row", justifyContent: "center" }}>
          <Pressable style={ProfileStyle.pagination} onClick={() => setProfilePage(prevCount => prevCount - 1)} ><Text>Prev</Text></Pressable>
          <Pressable style={ProfileStyle.pagination} onClick={() => setProfilePage(1)} ><Text>1</Text></Pressable>
          <Pressable style={ProfileStyle.pagination} onClick={() => setProfilePage(2)}><Text>2</Text></Pressable>
          <Pressable style={ProfileStyle.pagination} onClick={() => setProfilePage(3)}><Text>3</Text></Pressable>
          <Pressable style={ProfileStyle.pagination} onClick={() => setProfilePage(prevCount => prevCount + 1)} ><Text>Next</Text></Pressable>
        </View>

        <SuccessModif />

      </ScrollView>
    </View>
  )
}
