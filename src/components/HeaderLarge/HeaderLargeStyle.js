import { StyleSheet, Dimensions, StatusBar } from "react-native";
const window = Dimensions.get('window').width


export const HeaderLargeStyle = StyleSheet.create({
    container: {
        marginTop : StatusBar.currentHeight,
        height : "7%",
        width : "100%",
        backgroundColor: '#003147',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    containerImage : {
        height : window/8,
        width : window/3,
        backgroundColor : 'white',
        borderRadius : 10,
        position: "relative",
        top: "2%",
        left : "35%"
    },
    logo : {
        height : window/10,
        width : window/3.5,
        margin : window/60
    },
    profile : {
        height : window/10,
        width : window/10,
        position : "relative",
        top: "3%",
        right : "50%"
    }
  });