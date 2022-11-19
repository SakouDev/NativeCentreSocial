import React, { useEffect } from 'react'
import { Image, Text, TextInput, View, Pressable } from 'react-native'
import { Link } from 'react-router-native'
import { useForm, Controller } from "react-hook-form";

import { LoginStyle } from './LoginStyle'

export default function Login() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            mail: '',
            password: ''
        }
    });
    const onSubmit = data => console.log(data);


    return (
        <View style={LoginStyle.container}>
            <View style={LoginStyle.topDiv}>
                <Image
                    style={LoginStyle.image}
                    source={require('../../assets/img/girl.png')}
                />
            </View>
            <View style={LoginStyle.botDiv}>

                <Text style={[LoginStyle.textColor, LoginStyle.title]}>Connexion</Text>

                <View style={LoginStyle.loginGroup}>
                    <Text style={LoginStyle.titleInput}>Adresse Mail</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={LoginStyle.input}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="mail"
                    />
                    {errors.mail && <Text style={{ color: "red", textAlign: "center" }}>Ce champs est requis.</Text>}

                    <Text style={LoginStyle.titleInput}>Mot de passe</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={LoginStyle.input}
                                secureTextEntry={true}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="password"
                    />
                    {errors.password && <Text style={{ color: "red", textAlign: "center" }}>Ce champs est requis.</Text>}
                    <Link to={'/lostpass'}>
                        <Text style={{ textAlign: "right", paddingHorizontal: 20, }}>Mot de passe oublié ?</Text>
                    </Link>
                </View>

                <View style={LoginStyle.buttonGroup}>
                    <Pressable onPress={handleSubmit(onSubmit)} >
                        <Link to={'/home'} style={LoginStyle.buttonLog}>
                            <Text style={LoginStyle.textWhite}>Connexion</Text>
                        </Link>
                    </Pressable>
                    <Link to={'/register'} style={LoginStyle.buttonSign}>
                        <Text style={LoginStyle.textColor}>Inscription</Text>
                    </Link>
                </View>

            </View>

        </View>
    )
}
