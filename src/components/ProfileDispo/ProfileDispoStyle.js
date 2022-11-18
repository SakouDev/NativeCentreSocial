import { StyleSheet } from "react-native";

export const ProfileDispoStyle = StyleSheet.create({
    title: {
        fontSize: 20,
        color: "grey",
        alignSelf: "center",
    },
    subtitle: {
        marginTop: 5,
        alignSelf: "center",
        color: "grey",
        margin: 5,
        padding: 10,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 5,
    },
    choices: {
        flexDirection: "row",
        justifyContent:"center", 
        alignItems:"center"
    },
    certificateRow: {
        flexDirection: "row",
        height:40,
        width: "40%",
        justifyContent:"flex-start",
        alignItems: "center", 
        borderColor: "grey", 
        borderWidth: 1, 
        borderRadius: 10, 
        margin: 10,
        paddingHorizontal:10,
    },
});