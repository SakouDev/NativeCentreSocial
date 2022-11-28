import { Image, Text, View, ScrollView, StyleSheet, } from 'react-native'
import { Link } from "react-router-native";
import React from "react";

export default function ProfileSuccessModif() {
	return (
		<View style={styles.container}>
			<View style={styles.topDiv}>
				<Image
					style={styles.image}
					source={require("../../assets/img/girl2bis.png")}
				/>
			</View>

			<ScrollView style={styles.botDiv}>
				<View style={styles.confirmText}>
					<Text style={{ color: "#305f13", marginVertical: 20 }}>
						Votre profil a été modifié avec succés.
					</Text>
					<Text style={{ color: "#305f13", marginVertical: 20 }}>
						votre candidature est valable jusqu'au :{" "}
					</Text>
					<Text style={{ color: "#305f13", marginVertical: 20 }}>
						JJ/MM/AAAA
					</Text>
					<Text style={{ color: "#305f13", marginVertical: 20 }}>
						Vous recevrez un mail une semaine avant la fin de la date de
						validité de votre profil.
					</Text>
				</View>

				<Link to={"/home"} style={styles.button}>
					<Text style={styles.textWhite}>Terminer</Text>
				</Link>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
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
    image: {
        height: "100%",
        width: "100%",
    },
	confirmText: {
		justifyContent: "center",
		backgroundColor: "#c1ecbe",
		alignItems: "center",
		marginVertical: 40,
		padding: 30,
		borderRadius: 10,
	},
	button: {
		borderRadius: 15,
		backgroundColor: "#8025BE",
		width: "40%",
		alignSelf: "center",
		marginBottom: 50,
	},
	textWhite: {
		color: "white",
		padding: 10,
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 20,
	},
});
