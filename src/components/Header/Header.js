import React from "react";
import { Image, View } from "react-native";
import { HeaderStyle } from "./HeaderStyle";
import { Link } from "react-router-native";

export default function Header() {
	return (
		<View style={HeaderStyle.container}>
			<View style={HeaderStyle.containerImage}>
				<Link to={"/"}>
					<Image
						style={HeaderStyle.logo}
						source={require("../../assets/img/logo-agglo.png")}
					/>
				</Link>
			</View>

			<Image
				style={HeaderStyle.profile}
				source={require("../../assets/img/user.png")}
			/>
		</View>
	);
}
