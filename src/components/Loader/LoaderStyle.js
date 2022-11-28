import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get("window").width;

export const LoaderStyle = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#003147",
		alignItems: "center",
		justifyContent: "center",
	},
	containerImage: {
		height: window / 1.5,
		width: window / 1.5,
		backgroundColor: "white",
		borderRadius: 30,
	},
	image: {
		height: window / 2,
		width: window / 1.9,
		margin: window / 13,
	},
});
