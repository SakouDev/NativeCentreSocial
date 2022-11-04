import { StyleSheet, Dimensions, StatusBar } from "react-native";
const window = Dimensions.get('window').width


export const HeaderStyle = StyleSheet.create({
    container: {
        marginTop : StatusBar.currentHeight,
        height : "8%",
        width : "100%",
        backgroundColor: '#003147',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    containerImage : {
        height : window/8,
        width : window/8,
        backgroundColor : 'white',
        borderRadius : 10,
        position: "relative",
        top: "2%",
        left : "50%"
    },
    logo : {
        height : window/10,
        width : window/10,
        margin : window/100
    },
    profile : {
        height : window/10,
        width : window/10,
        position : "relative",
        top: "3%",
        right : "50%"
    }
  });