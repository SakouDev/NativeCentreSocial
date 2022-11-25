import React, { useEffect, useState } from "react";
import {
	Image,
	Text,
	View,
	ScrollView,
	Pressable,
	TextInput,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

import { ProfileEStyle } from "./ProfileEStyle";
import { ApiService } from "../../api/axios";
import { Link } from "react-router-native";

export default function ProfileE() {
	const [data, setData] = useState({
		User: {
			address: "9 rue du régiment de la chaudière",
			city: "Boulogne-sur Mer",
			createdAt: "2022-11-20T21:01:15.518Z",
			id: 5,
			image: "http://www.rien.com",
			mail: "simplon@test.com",
			phone: null,
			role: "Employeur",
			updatedAt: "2022-11-25T09:35:19.439Z",
			visibility: true,
			zipCode: "62200",
		},
		UserId: 5,
		createdAt: "2022-11-20T21:01:15.520Z",
		id: 1,
		name: "Simplon",
		siret: "12356894100789",
		updatedAt: "2022-11-25T09:35:19.339Z",
	});

	// // // // Les candidats
	// useEffect(() => {
	// 	ApiService.get("employeurs/1").then((element) =>
	// 		setData(element.data.data)
	// 	);
	// }, []);

	console.log(data);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			...data,
			name: data?.name,
			...data,
			phone: data?.User.phone,
			...data,
			address: data?.User.address,
			...data,
			zipCode: data?.User.zipCode,
			...data,
			city: data?.User.city,
		},
	});

	return (
		<View style={ProfileEStyle.container}>
			<View style={ProfileEStyle.topDiv}>
				<Image
					style={ProfileEStyle.image}
					source={require("../../assets/img/manbis.png")}
				/>
			</View>

			<ScrollView style={ProfileEStyle.botDiv}>
				<Text style={[ProfileEStyle.textColor, ProfileEStyle.title]}>
					Modifier mon profil
				</Text>

				<View
					style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 30 }}
				>
					<View style={{ width: "50%" }}>
						<Text style={ProfileEStyle.titleInput}>Nom de la structure</Text>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={ProfileEStyle.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="name"
						/>
					</View>

					<View style={{ width: "50%" }}>
						<Text style={ProfileEStyle.titleInput}>Téléphone</Text>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={ProfileEStyle.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="phone"
						/>
					</View>

					<View style={{ width: "100%" }}>
						<Text style={ProfileEStyle.titleInput}>Adresse</Text>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={ProfileEStyle.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="address"
						/>
					</View>

					<View style={{ width: "50%" }}>
						<Text style={ProfileEStyle.titleInput}>Code postal</Text>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={ProfileEStyle.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="zipCode"
						/>
					</View>
					<View style={{ width: "50%" }}>
						<Text style={ProfileEStyle.titleInput}>Ville</Text>
						<Controller
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<TextInput
									style={ProfileEStyle.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
								/>
							)}
							name="city"
						/>
					</View>
				</View>
				<Pressable
					onPress={handleSubmit((dataCheck) => console.log(dataCheck))}
				>
					<Link to={"/home"} style={ProfileEStyle.buttonLog}>
						<Text style={ProfileEStyle.textWhite}>Modifier</Text>
					</Link>
				</Pressable>
				{/* <SuccessModif /> */}
			</ScrollView>
		</View>
	);
}
