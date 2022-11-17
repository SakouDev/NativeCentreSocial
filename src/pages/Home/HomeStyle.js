import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const HomeStyle = StyleSheet.create({
    container: {
        height : '100%',
        width : '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 150
    },
    body: {
        margin : 10
    },
    topDiv:{
        height: '25%',
        width: '100%',
    },
    botDiv:{
        height: '75%',
        width: '100%',
    },
    textColor: {
        fontSize : 16,
        color:"#003147",
        fontWeight: "bold"
    },
    title: {
        fontSize : 20,
        alignSelf: "center",
        marginVertical: 30
    },
    image : {
        height : "100%",
        width : "100%",
    },
    LinkProfile: {
        alignSelf: "center",
        marginBottom:20,
    },
    imageProfil : { 
        height : 150,
        width : 150,
        borderRadius: 15,
    },
});