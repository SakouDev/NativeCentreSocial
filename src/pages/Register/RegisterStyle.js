import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const RegisterStyle = StyleSheet.create({
    container: {
        height : '86%',
        width : '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 100
    },

    input:{
        alignSelf: "center",
        width: '70%',
        borderWidth: 0.4,
        borderColor: "grey",
        borderRadius: 5,
        backgroundColor: "white",
        elevation : 10,
        margin: 15,
        height: 35,
    }
});