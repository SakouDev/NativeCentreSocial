import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003147',
        alignItems: 'center',
        justifyContent: 'center',
    },
});