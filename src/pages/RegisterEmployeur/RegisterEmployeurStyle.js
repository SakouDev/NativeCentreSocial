import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const RegisterEmployeurStyle = StyleSheet.create({
    container: {
        height : '86%',
        width : '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 70
    },

    input:{
        width: '70%',
        borderWidth: 0.4,
        borderColor: "grey",
        borderRadius: 5,
        backgroundColor: "white",
        elevation : 10,
        margin: 15,
        height: 35,
    },
    button: {
        height: "10%",
        width: "35%",
        backgroundColor : '#003147',
        justifyContent : "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 10,
        marginBottom: 10
    },

    textWhite : {
        fontSize : 16,
        color:"white",
        fontWeight: "bold"
    },

    text: {
        fontWeight: "bold",
    }
});