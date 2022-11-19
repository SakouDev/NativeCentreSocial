import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-native';
import { Link } from 'react-router-native'

import { ApiService } from '../../api/axios'

export default function Candidat({ }) {

  const [data, setData] = useState()
  const [ageC, setAgeC] = useState()

  const candidatId = useParams()


  useEffect(() => {
    ApiService.get(`candidats/${candidatId.id}`)
      .then(element => setData(element.data.data))
  }, [candidatId])


  // console.log(data?.User.Disponibilites);

  return (
    <View style={styles.container}>
      <View style={styles.topDiv}>
        <Image
          style={styles.image}
          source={require('../../assets/img/manRH.png')}
        />
      </View>

      <View style={styles.botDiv}>
        <View style={{ flexDirection: 'row', margin: 20, justifyContent: "center", alignItems: "center", }} >
          <Image
            style={styles.imgcand}
            source={require('../../assets/img/girl2.png')}
          />
          <Text style={{ fontSize: 32, }}> {data?.firstName} {data?.lastName} </Text>
        </View>
        <Text>{data?.birthday}</Text>
        <Text>{data?.User.address} </Text>
        <Text>{data?.User.zipCode} {data?.User.city}</Text>
        <Text>{data?.User.mail}</Text>

        <Text style={styles.title}>Diplômes</Text>
        {data?.User.Diplomes.map((dispo, id) => (
          <Text key={id} > . {dispo.certificate}</Text>
        ))}


        <Text style={styles.title}>Périodes de disonibilités</Text>
        {data?.User.Disponibilites.map((dispo, id) => (
          <Text key={id} > . {dispo.namePeriod}</Text>
        ))}

        <View style={{flexDirection:"row"}} >
          <Link to={'/contact'} style={styles.button}>
            <Text style={styles.textWhite}>Contacter</Text>
          </Link>
          <Link to={'/searchcandidats'} style={styles.button}>
            <Text style={styles.textWhite}>Retour</Text>
          </Link>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 150
  },
  body: {
    margin: 10
  },
  topDiv: {
    height: '25%',
    width: '100%',
  },
  botDiv: {
    height: '75%',
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  textColor: {
    fontSize: 16,
    color: "#003147",
    fontWeight: "bold"
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    marginVertical: 30
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imgcand: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#003147",
  },
  LinkProfile: {
    alignSelf: "center",
    marginBottom: 20,
  },
  imageProfil: {
    height: 150,
    width: 150,
    borderRadius: 15,
  },
  button: {
    height: 40,
    width: "35%",
    backgroundColor: '#003147',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 10,
    margin: 10
  },
  textWhite: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  },
})