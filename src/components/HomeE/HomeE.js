import { View, ScrollView, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'react-router-native'
import { HomeStyle } from '../../pages/Home/HomeStyle'

export default function HomeE() {
    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.topDiv}>
                <Image
                    style={HomeStyle.image}
                    source={require('../../assets/img/girl.png')}
                />
            </View>

            <ScrollView style={HomeStyle.botDiv}>
                <Text style={[HomeStyle.textColor, HomeStyle.title]}>Profil employeur</Text>

                <View style={HomeStyle.LinkProfile}>
                    <Link to={"/profile-employeur"}>
                        <Image
                            style={HomeStyle.imageProfil}
                            source={require('../../assets/img/man.png')}
                        />
                    </Link>
                    <Text style={{ textAlign: "center" }}>Modifier mon Profil</Text>
                </View>

                <View style={HomeStyle.LinkProfile}>
                    <Link to={"/searchcandidats"}>
                        <Image
                            style={HomeStyle.imageProfil}
                            source={require('../../assets/img/girl2.png')}
                        />
                    </Link>
                    <Text style={{ textAlign: "center" }}>Rechercher un candidat</Text>
                </View>

                <View style={HomeStyle.LinkProfile}>
                    <Link to={""}>
                        <Image
                            style={HomeStyle.imageProfil}
                            source={require('../../assets/img/searchJob.png')}
                        />
                    </Link>
                    <Text style={{ textAlign: "center" }}>Proposer une offre</Text>
                </View>


            </ScrollView>
        </View>
    )
}