import { StyleSheet, Dimensions, StatusBar } from "react-native";
const window = Dimensions.get('window').width


export const FooterStyle = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        height: "7%",
        width: "100%",
        backgroundColor: '#003147',
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 0
    },
    text: {
        color: 'white'
    }
});
