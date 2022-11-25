import React, { useContext } from "react";
import { Image, Pressable, View } from "react-native";
import { HeaderStyle } from "./HeaderStyle";
import { Link } from "react-router-native";
import { AuthContext } from "../../api/AuthContext";

export default function Header() {
	const { isLoading, logout } = useContext(AuthContext);
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

			{/* <Link to={"/"}>
				<Pressable onPress={logout()}> */}
					<Image
						style={HeaderStyle.profile}
						source={require("../../assets/img/user.png")}
					/>
				{/* </Pressable>
			</Link> */}
		</View>
	);
}
