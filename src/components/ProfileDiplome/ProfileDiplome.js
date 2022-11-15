import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './ProfileDiplomeStyle'
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


export default function ProfileDiplome() {

    const [checked, onChange] = useState(false);
    const [selectedState, setSelectedState] = useState();

    function onCheckmarkPress() {
        onChange(!checked);
    }



    return (
        <View>
            <Text style={styles.title}>Mes diplômes</Text>



            <View style={styles.certificateRow}>
                <Pressable
                    style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                    onPress={onCheckmarkPress}>
                    {checked && <Ionicons name="checkmark" size={24} color="white" />}
                </Pressable>

                <Text>BAFA</Text>
                <Picker
                    selectedValue={selectedState}
                    style={{ width: "40%" }}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedState(itemValue)
                    }>
                    <Picker.Item label="En cours" value="en-cours" />
                    <Picker.Item label="Terminé" value="terminé" />
                </Picker>

                {/* <Ionicons name="calendar" size={24} color="black" /> */}

            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderColor: "grey", borderWidth: 1, borderRadius: 10, marginVertical: 5, }}>
                <Pressable
                    style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                    onPress={onCheckmarkPress}>
                    {checked && <Ionicons name="checkmark" size={24} color="white" />}
                </Pressable>

                <Text>BAFA</Text>
                <Picker
                    selectedValue={selectedState}
                    style={{ width: "40%" }}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedState(itemValue)
                    }>
                    <Picker.Item label="En cours" value="en-cours" />
                    <Picker.Item label="Terminé" value="terminé" />
                </Picker>

                {/* <Ionicons name="calendar" size={24} color="black" /> */}

            </View>



        </View>
    )
}