import { View, Text } from 'react-native'
import { Link } from 'react-router-native'
import React from 'react'

export default function SuccessModif() {
    return (
        <View>
            <View style={{ justifyContent: "center", backgroundColor: "#c1ecbe", alignItems: "center", marginVertical: 40, padding: 30, borderRadius: 10, }}>
                <Text style={{ color: "#305f13", marginVertical: 20 }} >Votre profil a été modifié avec succés.</Text>
                <Text style={{ color: "#305f13", marginVertical: 20 }}>votre candidature est valable jusqu'au : </Text>
                <Text style={{ color: "#305f13", marginVertical: 20 }}>JJ/MM/AAAA</Text>
                <Text style={{ color: "#305f13", marginVertical: 20 }}>Vous recevrez un mail une semaine avant la fin de la date de validité de votre profil.</Text>
            </View>

            <Link to={'/'} style={{borderRadius:15, backgroundColor:"#8025BE", width: "40%", alignSelf:"center", marginBottom:50,}} >
                <Text style={{ color: "white", padding:10, textAlign: "center", fontWeight:"bold", fontSize:20}} >Terminer
                </Text>
            </Link>
        </View>
    )
}