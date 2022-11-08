import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "./StyleRegister";

const Register = () => {

    const [email, onChangeEmail] = useState("Useless Text");
    const [password, onChangePassword] = useState("Useless Password");

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="useless placeholder"
                keyboardType="visible-password"
            />
        </SafeAreaView>
    );
};

export default Register;