import React, { useState } from 'react'
import { Image, Text, View, ScrollView, } from 'react-native'

import ProfileDiplome from '../../components/ProfileDiplome/ProfileDiplome'
import ProfileDispo from '../../components/ProfileDispo/ProfileDispo'
import ProfileGenerale from '../../components/ProfileGenerale/ProfileGenerale'
import { ProfileStyle } from './ProfileStyle'
import { ApiService } from '../../api/axios'


export default function ProfileC() {

  const [data, setData] = useState(
    {
      "id": 1,
      "firstName": "Luc",
      "lastName": "Vigneron",
      "birthday": "27/04/1999",
      "UserId": 1,
      "createdAt": "2022-11-18T17:56:48.302Z",
      "updatedAt": "2022-11-18T17:56:48.302Z",
      "User": {
        "id": 1,
        "mail": "test@test.com",
        "phone": null,
        "visibility": true,
        "address": "9 rue du régiment de la chaudière",
        "zipCode": "62200",
        "city": "Boulogne-sur Mer",
        "role": "Candidat",
        "image": "http://www.rien.com",
        "createdAt": "2022-11-18T17:56:48.300Z",
        "updatedAt": "2022-11-18T17:56:48.300Z",
        "Diplomes": [
          {
            "id": 1,
            "certificate": "BAFA",
            "createdAt": "2022-11-18T17:56:48.235Z",
            "updatedAt": "2022-11-18T17:56:48.235Z",
            "UserDiplome": {
              "createdAt": "2022-11-18T17:56:50.720Z",
              "updatedAt": "2022-11-18T17:56:50.720Z",
              "UserId": 1,
              "DiplomeId": 1
            }
          }
        ],
        "Disponibilites": [
          {
            "id": 3,
            "namePeriod": "Mercredi",
            "createdAt": "2022-11-18T17:56:48.298Z",
            "updatedAt": "2022-11-18T17:56:48.298Z",
            "UserDispo": {
              "createdAt": "2022-11-18T17:56:50.399Z",
              "updatedAt": "2022-11-18T17:56:50.399Z",
              "UserId": 1,
              "DisponibiliteId": 3
            }
          },
          {
            "id": 8,
            "namePeriod": "Vacances de Fevrier",
            "createdAt": "2022-11-18T17:56:48.298Z",
            "updatedAt": "2022-11-18T17:56:48.298Z",
            "UserDispo": {
              "createdAt": "2022-11-18T17:56:49.408Z",
              "updatedAt": "2022-11-18T17:56:49.408Z",
              "UserId": 1,
              "DisponibiliteId": 8
            }
          }
        ]
      }
    }
  )


  // // // Les candidats
  // useEffect(() => {
  //   ApiService.get('candidats/1')
  //     .then(element => setData(element.data.data))
  //   // console.log(data);
  // }, [])

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

        <ProfileGenerale data={data} setData={setData} />
        <ProfileDiplome data={data} setData={setData} />
        <ProfileDispo data={data} setData={setData} />

      </ScrollView>
    </View>
  )
}
