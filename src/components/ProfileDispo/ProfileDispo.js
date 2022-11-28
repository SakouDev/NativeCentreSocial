import { View, Text, Switch, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-native';
import { useForm, Controller } from "react-hook-form";

import { ProfileDispoStyle } from './ProfileDispoStyle'
import { ApiService } from '../../api/axios'


export default function ProfileDispo({ data, setData }) {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {}
    });

    // Vérifier l'utilité
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [disposCandidats, setDisposCandidats] = useState()
    const [dispoData, setDispoData] = useState()

    useEffect(() => {
        const dispoCandidats = data?.User.Disponibilites.map(element => {
            return {
                id: `${element.id}`,
                namePeriod: `${element.namePeriod}`
            }
        })
        setDisposCandidats(dispoCandidats);

        ApiService.get('disponibilites').then(element => setDispoData(element.data.data))
    }, [data])


    const handleChangeDispo = (event) => {
        console.log(event);
    }

    return (
        <View style={{ marginVertical: 20 }}>
            <Text style={ProfileDispoStyle.title}>Mes  disponibilités</Text>
            <Text style={ProfileDispoStyle.subtitle}>Jour de la semaine</Text>


            <View style={{ flexDirection: "row", flexWrap: "wrap", }}>
                {dispoData?.map((element, id) => {
                    return (
                        <View style={ProfileDispoStyle.certificateRow} key={id}>
                            <Switch
                                value={disposCandidats?.find(helper => helper.id == element.id) ? true : false}
                                // style={styles.checkboxBase}
                                onValueChange={handleChangeDispo}
                            />
                            <Text style={{ paddingHorizontal: 20 }}>{element.namePeriod}</Text>
                        </View>
                    );
                })}
            </View>

            <Pressable onPress={handleSubmit((dataCheck) => console.log(dataCheck))} >
                <Link to={'/successmodif'} style={ProfileDispoStyle.buttonLog}>
                    <Text style={ProfileDispoStyle.textWhite}>Confirmer les Changements</Text>
                </Link>
            </Pressable>
        </View>
    )
}