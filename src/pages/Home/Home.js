import React, { useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../api/AuthContext.js";
import HomeC from "../../components/HomeC/HomeC.js";
import HomeE from "../../components/HomeE/HomeE.js";

export default function Home() {
	const { isLoading, userInfo } = useContext(AuthContext);

	console.log("aled",userInfo.accessToken);
  if (userInfo.role == "Employeur"|| userInfo.role == "employeur") {
		return <HomeE />;
	}
	if (userInfo.role == "candidat" || userInfo.role == "Candidat") {
		return (
				<HomeC />
		);
	}
}
