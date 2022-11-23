import React from 'react';
import {Image, Text, View} from "react-native";
import {Link} from "react-router-native";
import { StatusSelectorStyle } from "./StatusSelectorStyle";

const StatusSelector = () => {
    return (
        <View style={StatusSelectorStyle.container}>
            <View style={StatusSelectorStyle.imgRecruteur}>
                <Link to={'/registercandidat'}>
                    <Image source={require('../../assets/img/girl2.png')} ></Image>
                </Link>
                <Text style={StatusSelectorStyle.text}>Candidat</Text>
        </View>
            <View style={StatusSelectorStyle.imgEmployeur}>
                <Link to={'/registeremployeur'} >
                    <Image source={require('../../assets/img/man.png')}></Image>
                </Link>
                <Text style={StatusSelectorStyle.text}>Recruteur</Text>
            </View>
        </View>
    );
};

export default StatusSelector;