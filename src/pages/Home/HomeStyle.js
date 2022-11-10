import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const HomeStyle = StyleSheet.create({
    container: {
        height : '100%',
        width : '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    body: {
        margin : 10
    }
});