import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: "10%",
        width: "10%",
        backgroundColor : 'red'
    }
});