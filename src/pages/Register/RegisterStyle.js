import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const RegisterStyle = StyleSheet.create({
    container: {
        height : '86%',
        width : '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topDiv:{
        height: '25%',
        width: '100%',
    },
    botDiv:{
        height: '75%',
        width: '100%',
    },

    image : {
        height : "100%",
        width : "100%",
    },

    input:{
        alignSelf: "center",
        width: '65%',
        borderWidth: 0.4,
        borderColor: "grey",
        borderRadius: 5,
        backgroundColor: "white",
        elevation : 10,
        margin: 15,
    }
});