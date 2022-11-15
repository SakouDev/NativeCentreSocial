import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { ProfileDispoStyle } from './ProfileDispoStyle'


export default function ProfileDispo() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View>
            <Text style={ProfileDispoStyle.title}>Mes  disponibilités</Text>
            <Text style={ProfileDispoStyle.subtitle}>Jour de la semaine</Text>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <View style={ProfileDispoStyle.choices}>
                        <Text>Mercredi</Text>
                        <Switch onValueChange={toggleSwitch} value={isEnabled} />
                    </View>
                    <View style={ProfileDispoStyle.choices}>
                        <Text>Samedi</Text>
                        <Switch onValueChange={toggleSwitch} value={isEnabled} />
                    </View>
                </View>
            </View>
            <Text style={ProfileDispoStyle.subtitle}>Périodes de vacances</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <View style={ProfileDispoStyle.choices}>
                    <Text>Février</Text>
                    <Switch onValueChange={toggleSwitch} value={isEnabled} />
                </View>
                <View style={ProfileDispoStyle.choices}>
                    <Text>Avril</Text>
                    <Switch onValueChange={toggleSwitch} value={isEnabled} />
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View style={ProfileDispoStyle.choices}>
                <Text>Juillet</Text>
                    <Switch onValueChange={toggleSwitch} value={isEnabled} />
                </View>
                <View style={ProfileDispoStyle.choices}>
                <Text>Octobre</Text>
                    <Switch onValueChange={toggleSwitch} value={isEnabled} />
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <View style={ProfileDispoStyle.choices}>
                <Text>Août</Text>
                    <Switch onValueChange={toggleSwitch} value={isEnabled} />
                </View>
                <View style={ProfileDispoStyle.choices}>

                <Text>Noël</Text>
                    <Switch onValueChange={toggleSwitch} value={isEnabled} />
                </View>
            </View>


        </View>
    )
}