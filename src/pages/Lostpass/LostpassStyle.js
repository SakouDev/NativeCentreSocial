import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const LostpassStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
    titleInput: {
        marginTop : 10,
        alignSelf: "center",
        color : "grey"
    },
    buttonLog: {
        height: 60,
        width: "35%",
        backgroundColor : '#003147',
        justifyContent : "center",
        alignItems: "center",
        alignSelf:"center",
        borderRadius: 10,
        elevation: 10,
        marginVertical: 30
    },
    textWhite : {
        fontSize : 16,
        color:"white",
        fontWeight: "bold"
    },
    textValidation: { 
        margin: 30, 
        padding: 30, 
        backgroundColor: "#E0D1E7", 
        borderWidth: 1, 
        borderColor: "#A3CFBB", 
        borderRadius: 15, 
        elevation: 10, 
        color: "#0F5132", 
        textAlign: "justify" 
    },
});