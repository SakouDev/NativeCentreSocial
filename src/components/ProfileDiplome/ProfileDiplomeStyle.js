import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const styles = StyleSheet.create({
    certificateRow: {
        flexDirection: "row",
        height:40, 
        justifyContent:"flex-start",
        alignItems: "center", 
        borderColor: "grey", 
        borderWidth: 1, 
        borderRadius: 10, 
        marginVertical: 10,
        paddingHorizontal:40,
    },

    title: {
        marginTop: 5,
        alignSelf: "center",
        color: "grey",
        margin: 5,
        padding: 10,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
    },
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'transparent',
    },

    checkboxChecked: {
        backgroundColor: '#337',
    },
})