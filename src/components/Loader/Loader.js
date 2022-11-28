import React from "react";
import { Image, View } from "react-native";
import { LoaderStyle } from "./LoaderStyle";

export default function Loader({ setLoading }) {
	return (
		<View style={LoaderStyle.container}>
			<View style={LoaderStyle.containerImage}>
				<Image
					style={LoaderStyle.image}
					source={require("../../assets/img/logo-agglo.png")}
				/>
			</View>
		</View>
	);
}
