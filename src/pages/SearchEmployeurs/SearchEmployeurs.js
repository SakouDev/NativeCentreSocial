import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ApiService } from '../../api/axios'
import { Link } from 'react-router-native'

export default function SearchEmployeurs() {

    const [employeurs, setEmployeurs] = useState([])

    useEffect(() => {
        ApiService.get('employeurs')
            .then(element => setEmployeurs(element.data.data))

    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topDiv}>
                <Image
                    style={styles.image}
                    source={require('../../assets/img/manRH.png')}
                />
            </View>

            <ScrollView style={styles.botDiv}>
                <Text style={[styles.textColor, styles.title]}>Profils Employeur</Text>
                <Text style={[styles.textColor, styles.center]} >Ici vous trouverez tous les profils d'employeurs</Text>

                {employeurs.map((employeur, id) => {
                    return (
                        <View key={id} style={styles.employView} >
                            <Image
                                style={styles.imgcand}
                                source={require('../../assets/img/man.png')}
                            />
                            <Link to={`/employeur/${employeur.id}`} >
                                <Text style={styles.fullname}> {employeur.name} </Text>
                            </Link>
                        </View>
                    );
                })}

            </ScrollView>
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
        margin: -30,
        zIndex: 2
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
    center: {
        textAlign: "center",
    },
    employView : {
        flexDirection: 'row', 
        margin: 20, 
        justifyContent: "center", 
        alignItems: "center",
    },
    fullname : {
        borderWidth: 0.3, 
        height: 50, 
        width: 200, 
        borderRadius: 25, 
        textAlign: "center", 
        zIndex: 1, 
        paddingHorizontal:20, 
        paddingVertical:10,
    },
})