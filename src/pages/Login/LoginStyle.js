import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const LoginStyle = StyleSheet.create({
    container: {
        height : '86%',
        width : '100%',
        backgroundColor: 'white',
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

    buttonGroup:{
        height: '15%',
        width: '100%',
        alignItems : "center",
    },
    buttonLog: {
        height: "50%",
        width: "35%",
        backgroundColor : '#003147',
        justifyContent : "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 10,
        marginBottom: 10
    },
    buttonSign: {
        height: "50%",
        width: "25%",
        justifyContent : "center",
        alignItems: "center",
    },
    textWhite : {
        fontSize : 16,
        color:"white",
        fontWeight: "bold"
    },
    textColor: {
        fontSize : 16,
        color:"#003147",
        fontWeight: "bold"
    },
    title: {
        fontSize : 20,
        alignSelf: "center",
        marginVertical: 50
    },
    image : {
        height : "100%",
        width : "100%",
    },
    loginGroup:{
        height : "45%"
    },
    input:{
        alignSelf: "center",
        width: '65%',
        height : 40,
        borderWidth: 0.4,
        borderColor: "grey",
        borderRadius: 5,
        backgroundColor: "white",
        elevation : 10,
        margin: 15,
    },
    inputText: {
        width: "100%",
        fontSize : 16,
        color:"#003147",
        fontWeight: "bold",
        textAlign: "center",
    },
    titleInput: {
        marginTop : 10,
        alignSelf: "center",
        width: '65%',
        color : "grey"
    }
});