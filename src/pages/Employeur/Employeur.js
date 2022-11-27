import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-native";

import { ApiService } from "../../api/axios";

export default function Employeur() {
	const [data, setData] = useState();
	const employeurId = useParams();

	useEffect(() => {
		ApiService.get(`employeurs/${employeurId.id}`).then((element) =>
			setData(element.data.data)
		);
	}, [employeurId]);

	return (
		<View style={styles.container}>
			<View style={styles.topDiv}>
				<Image
					style={styles.image}
					source={require("../../assets/img/manRH.png")}
				/>
			</View>

			<View style={styles.botDiv}>
				<View style={styles.mainPres}>
					<Image
						style={styles.imgcand}
						source={require("../../assets/img/man.png")}
					/>
					<Text style={[{ fontSize: 32 }, styles.textColor]}>{data?.name}</Text>
				</View>
				<Text style={styles.textColor}>{data?.User.address} </Text>
				<Text style={styles.textColor}>
					{data?.User.zipCode} {data?.User.city}
				</Text>
				<Text style={styles.textColor}>{data?.User.mail}</Text>

				<Text style={styles.subtitle}>Disonibilités recherchés</Text>
				{data?.User.Disponibilites.map((dispo, id) => (
					<Text key={id}> . {dispo.namePeriod}</Text>
				))}

				<View style={{ flexDirection: "row", marginTop: 15 }}>
					<Link to={"/contact"} style={styles.button}>
						<Text style={styles.textWhite}>Contacter</Text>
					</Link>
					<Link to={"/search-employeurs"} style={styles.button}>
						<Text style={styles.textWhite}>Retour</Text>
					</Link>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		backgroundColor: "#fff",
		alignItems: "center",
		paddingBottom: 150,
	},
	topDiv: {
		height: "25%",
		width: "100%",
	},
	botDiv: {
		height: "75%",
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	textColor: {
		color: "#003147",
		fontWeight: "400",
	},
	subtitle: {
		alignSelf: "center",
		color: "grey",
		margin: 25,
		padding: 10,
		borderColor: "grey",
		borderWidth: 1,
		borderRadius: 5,
	},
	image: {
		height: "100%",
		width: "100%",
	},
	imgcand: {
		height: 80,
		width: 80,
		borderRadius: 50,
		borderWidth: 5,
		borderColor: "#003147",
	},
	button: {
		height: 40,
		width: "35%",
		backgroundColor: "#003147",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		elevation: 10,
		margin: 10,
	},
	textWhite: {
		fontSize: 16,
		color: "white",
		fontWeight: "bold",
	},
	mainPres: {
		flexDirection: "row",
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
