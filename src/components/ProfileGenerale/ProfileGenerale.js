import { View, Text, TextInput, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from "react-hook-form";
import { Link } from 'react-router-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { ProfileStyle } from '../../pages/Profile/ProfileStyle'

export default function ProfileGenerale({ data, setData }) {

    const [selectedJob, setSelectedJob] = useState();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            ...data, firstName: data?.firstName,
            ...data, lastName: data?.lastName,
            ...data, birthday: data?.birthday,
            ...data, phone: data?.User.phone,
            ...data, zipCode: data?.User.zipCode,
            ...data, city: data?.User.city,
            ...data, address: data?.User.address,
        }
    });

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };


    return (
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 30 }}>
            <View style={{ width: "100%" }}>
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
            </View>

            <View style={{ width: "50%" }}>
                <Text style={ProfileStyle.titleInput}>Prénom</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={ProfileStyle.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="firstName"
                />
            </View>

            <View style={{ width: "50%" }}>
                <Text style={ProfileStyle.titleInput}>Nom</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={ProfileStyle.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="lastName"
                />
            </View>


            <View style={{ width: "50%" }}>
                <Text style={ProfileStyle.titleInput}>Date de Naissance</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <TextInput
                                style={ProfileStyle.input}
                                onBlur={onBlur}
                                onPress={showDatePicker}
                                onChangeText={onChange}
                                value={value}
                            />
                        </View>
                    )}
                    name="birthday"
                />
            </View>

            <View style={{ width: "50%" }}>
                <Text style={ProfileStyle.titleInput}>Téléphone</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={ProfileStyle.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="phone"
                />
            </View>

            <View style={{ width: "50%" }}>
                <Text style={ProfileStyle.titleInput}>Code postal</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={ProfileStyle.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="zipCode"
                />
            </View>
            <View style={{ width: "50%" }}>
                <Text style={ProfileStyle.titleInput}>Ville</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={ProfileStyle.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="city"
                />
            </View>

            <View style={{ width: "100%" }}>
                <Text style={ProfileStyle.titleInput}>Adresse</Text>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={ProfileStyle.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="address"
                />
            </View>


            <Pressable onPress={handleSubmit((dataCheck) => console.log(dataCheck))} >
                    <Link to={'/home'} style={ProfileStyle.buttonLog}>
                        <Text style={ProfileStyle.textWhite}>Suivant</Text>
                    </Link>
                </Pressable>
        </View>
    )
}