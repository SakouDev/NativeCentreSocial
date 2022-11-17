import { StyleSheet, Text, View, Image, Switch } from 'react-native'
import React, { useState } from 'react'


export default function SearchCandidats() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.topDiv}>
                <Image
                    style={styles.image}
                    source={require('../../assets/img/manRH.png')}
                />
            </View>

            <View style={styles.botDiv}>
                <Text style={[styles.textColor, styles.title]}>Profils candidats</Text>
                <Text style={[styles.textColor, styles.center]} >Ici vous trouverez tous les profils de candidats</Text>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", borderWidth: 0.3, height: 50, width: "80%", paddingLeft: -20, margin: 20 ,borderRadius:25}}>
                    <Image
                        style={styles.imgcand}
                        source={require('../../assets/img/girl2.png')}
                    />
                    <Text>Olivia Boyer</Text>
                    <Switch onValueChange={toggleSwitch} value={isEnabled} />
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
        borderWidth:5,
        borderColor:"#003147"
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

    }
})