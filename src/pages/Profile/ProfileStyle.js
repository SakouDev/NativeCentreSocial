import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const ProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginBottom: 50,
    },
    topDiv: {
        height: '25%',
        width: '100%',
    },
    botDiv: {
        flexGrow: 1,
        height: "75%",
        paddingHorizontal: 20,
        paddingBottom: 300,

    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: 30
    },
    image: {
        height: "100%",
        width: "100%",
    },
    titleInput: {
        marginTop: 5,
        alignSelf: "center",
        width: '90%',
        color: "grey"
    },
    input: {
        height: 40,
        width: "90%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        elevation: 10,
        backgroundColor: "white",
    },
    selected: {
        height: 40,
        width: "90%",
        margin: 15,
        borderWidth: 1,
    },
    pagination: {
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


});