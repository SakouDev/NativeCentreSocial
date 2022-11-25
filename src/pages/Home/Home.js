import React, { useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../api/AuthContext.js";
import HomeC from "../../components/HomeC/HomeC.js";
import HomeE from "../../components/HomeE/HomeE.js";

export default function Home() {
	const { isLoading, userInfo } = useContext(AuthContext);

	console.log(userInfo.role);
	if (userInfo.role == "Employeur") {
		return <HomeE />;
	}
	if (userInfo == "candidat") {
		return (
			<View>
				<HomeC />
			</View>
		);
	}
}
