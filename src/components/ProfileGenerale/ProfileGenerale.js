import { View, Text, TextInput, } from 'react-native'
import React, { useState } from 'react'
import { ProfileStyle } from '../../pages/Profile/ProfileStyle'
import { Picker } from '@react-native-picker/picker';

export default function ProfileGenerale() {

    const [selectedJob, setSelectedJob] = useState();
    const [nom, onChangeNom] = useState(null);
    const [prenom, onChangePrenom] = useState(null);

    return (
        <View>
            <Picker
                selectedValue={selectedJob}
                style={ProfileStyle.selected}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedJob(itemValue)
                }>
                <Picker.Item label="Poste recherché" value="" />
                <Picker.Item label="Animateur" value="Animateur" />
                <Picker.Item label="Directeur" value="Directeur" />
            </Picker>

            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ width: "50%" }}>
                    <Text style={ProfileStyle.titleInput}>Nom</Text>
                    <TextInput style={ProfileStyle.input} onChangeText={onChangeNom} />
                </View>
                <View style={{ width: "50%" }}>
                    <Text style={ProfileStyle.titleInput}>Prénom</Text>
                    <TextInput style={ProfileStyle.input} onChangeText={onChangePrenom} />
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ width: "50%" }}>
                    <Text style={ProfileStyle.titleInput}>Date de Naisscance</Text>
                    <TextInput style={ProfileStyle.input} onChangeText={onChangeNom} />
                </View>
                <View style={{ width: "50%" }}>
                    <Text style={ProfileStyle.titleInput}>Téléphone</Text>
                    <TextInput style={ProfileStyle.input} onChangeText={onChangePrenom} />
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ width: "50%" }}>
                    <Text style={ProfileStyle.titleInput}>Code postal</Text>
                    <TextInput style={ProfileStyle.input} onChangeText={onChangeNom} />
                </View>
                <View style={{ width: "50%" }}>
                    <Text style={ProfileStyle.titleInput}>Ville</Text>
                    <TextInput style={ProfileStyle.input} onChangeText={onChangePrenom} />
                </View>
            </View>

            <Text style={ProfileStyle.titleInput}>Adresse</Text>
            <TextInput style={ProfileStyle.input} onChangeText={onChangePrenom} />
        </View>
    )
}