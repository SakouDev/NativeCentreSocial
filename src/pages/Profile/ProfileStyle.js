import { StyleSheet, StatusBar, Dimensions } from "react-native";
const window = Dimensions.get('window').width

export const ProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topDiv: {
        height: '25%',
        width: '100%',
    },
    botDiv: {
        height: '75%',
        width: '100%',
    },
    title: {
        fontSize: 20,
        alignSelf: "center",
        marginVertical: 30
    },
    image: {
        height: "100%",
        width: "100%",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    select: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 18,
        backgroundColor: '#fff',
    },
    titleselect: {
        fontSize: 12,
    },
});