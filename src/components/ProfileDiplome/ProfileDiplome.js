import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './ProfileDiplomeStyle'
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { ApiService } from '../../api/axios'


export default function ProfileDiplome({ data, setData }) {

    const [checked, onChange] = useState(false);
    const [selectedState, setSelectedState] = useState();
    const [diplomes, setDiplomes] = useState();
    const [diplomesData, setDiplomesData] = useState();

    useEffect(() => {
        const diplomes = data?.User.Diplomes.map(element => {
            return {
                id: `${element.id}`
            }
        })
        setDiplomes(diplomes);

        ApiService.get('diplomes').then(element => setDiplomesData(element.data.data))
    }, [data])

    console.log(diplomesData.certificate);

    const handleChangeDiplome = (event) => {
        event.target.checked ?
            setDiplomes(
                [...diplomes,
                {
                    id: event.target.value
                }
                ]
            )
            :
            setDiplomes(diplomes.filter(element => element.id != event.target.value))
    }

    return (
        <View>
            <Text style={styles.title}>Mes diplômes</Text>


            {diplomesData?.map((id, element) => (
                <View style={styles.certificateRow}>
                    <Checkbox
                        key={id}
                        name={element.certificate}
                        value={element.id}
                        // defaultChecked = {diplo.find(helper => helper.id == element.id)?true:false}
                        style={styles.checkboxBase}
                        onPress={handleChangeDiplome}

                    />


                    <Text>{element?.certificate} Tada</Text>

                </View>
            ))}


        </View>
    )
}