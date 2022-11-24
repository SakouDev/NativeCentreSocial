import { AuthProvider } from "./src/api/AuthContext";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Loader from "./src/components/Loader/Loader";

export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	if (loading) return <Loader />;

	return (
		<AuthProvider>
			<Navigation />
			<StatusBar backgroundColor="#003147" />
		</AuthProvider>
	);
}
