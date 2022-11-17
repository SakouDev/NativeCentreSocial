import { View } from 'react-native'
import React, { useEffect } from 'react'
import ProfileDiplome from '../../components/ProfileDiplome/ProfileDiplome'
import ProfileDispo from '../../components/ProfileDispo/ProfileDispo'
import ProfileGenerale from '../../components/ProfileGenerale/ProfileGenerale'

export default function ProfilePage(profilePage) {
  if (profilePage.profilePage == 0) {
    return <ProfileGenerale />
  } else if (profilePage.profilePage == 1) {
    return <ProfileDiplome />
  } else if (profilePage.profilePage == 2) {
    return <ProfileDispo />
  }

}