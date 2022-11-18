import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './ProfileDiplomeStyle'
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { ApiService } from '../../api/axios'


export default function ProfileDiplome({ data, setData }) {

    //Vérifier l'utilité
    const [checked, setChecked] = useState({});

    const [diplomesCandidats, setDiplomesCandidats] = useState([]);
    const [diplomesData, setDiplomesData] = useState();

    useEffect(() => {
        const diplomesCandidats = data?.User.Diplomes.map(element => {
            return {
                id: `${element.id}`,
                certificate: `${element.certificate}`
            }
        })
        setDiplomesCandidats(diplomesCandidats);
        // console.log(diplomes)

        ApiService.get('diplomes').then(element => setDiplomesData(element.data.data))
    }, [data])


    const handleChangeDiplome = (event) => {
        event.target.checked ?
            setDiplomesCandidats(
                [...diplomesCandidats,
                {
                    id: event.target.value
                }
                ]
            )
            :
            setDiplomesCandidats(diplomesCandidats.filter(element => element.id != event.target.value))
    }

    return (
        <View>
            <Text style={styles.title}>Mes diplômes</Text>


            {diplomesData?.map((element, id) => {
                return (

                    <View style={styles.certificateRow} key={id}>
                        <Checkbox
                            value={ diplomesCandidats?.find(helper => helper.id == element.id) ? true : false}
                            // style={styles.checkboxBase}
                            onValueChange={(newValue) => { setChecked({...checked, true: false}) }}
                        />                 


                        <Text style={{ paddingHorizontal: 40 }}>{element.certificate}</Text>
                        {/* <Ionicons name="calendar" size={24} color="black" /> */}
                    </View>
                );
            })}


        </View>
    )
}