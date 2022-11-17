import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'react-router-native'
import { HomeStyle } from '../../pages/Home/HomeStyle'

export default function HomeC() {
    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.topDiv}>
                <Image
                    style={HomeStyle.image}
                    source={require('../../assets/img/girl.png')}
                />
            </View>

            <View style={HomeStyle.botDiv}>
                <Text style={[HomeStyle.textColor, HomeStyle.title]}>Profil candidat</Text>

                <View style={HomeStyle.LinkProfile}>
                    <Link to={"/profile"}>
                        <Image
                            style={HomeStyle.imageProfil}
                            source={require('../../assets/img/girl2.png')}
                        />
                    </Link>
                    <Text style={{ textAlign: "center" }}>Modifier mon Profil</Text>
                </View>

                <View style={HomeStyle.LinkProfile}>
                    <Link to={""}>
                        <Image
                            style={HomeStyle.imageProfil}
                            source={require('../../assets/img/searchJob.png')}
                        />
                    </Link>
                    <Text style={{ textAlign: "center" }}>Rechercher une offre</Text>
                </View>


            </View>
        </View>
    )
}