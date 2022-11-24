
import React, { useContext } from "react";
import { NativeRouter, Route, Routes } from 'react-router-native';

import { AuthContext } from "./src/api/AuthContext";

import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
import HeaderLarge from './src/components/HeaderLarge/HeaderLarge';
import Loader from './src/components/Loader/Loader';

import Login from './src/pages/Login/Login';
import LostPass from './src/pages/Lostpass/Lostpass';
import Home from './src/pages/Home/Home';

import RegisterCandidat from "./src/pages/RegisterCandidat/RegisterCandidat";
import RegisterEmployeur from "./src/pages/RegisterEmployeur/RegisterEmployeur";
import StatusSelector from "./src/pages/StatusSelector/StatusSelector";

import Profile from './src/pages/Profile/Profile'
import ProfileDiplome from './src/components/ProfileDiplome/ProfileDiplome';
import ProfileDispo from './src/components/ProfileDispo/ProfileDispo';
import ProfileGenerale from './src/components/ProfileGenerale/ProfileGenerale';

import SearchCandidats from './src/pages/SearchCandidats/SearchCandidats';
import Candidat from './src/pages/Candidat/Candidat';
import Contact from './src/pages/Contact/Contact';


export default function Navigation() {

    const { userInfo, splashLoading } = useContext(AuthContext);

	return (
		<NativeRouter>
			<Header />

			<Routes>
                { splashLoading ? (
                    <Route exact pass="/splashloader"  element={<Loader />} /> 
                ): /*userInfo.accessToken ?*/ (
                    <>
                        {/* Welcome */}
                        <Route exact path="/home" element={<Home />} /> 
                        <Route exact path="/profile" element={<Profile />}>
                            <Route exact path="/profile/generale" element={<ProfileGenerale />} />
                            <Route exact path="/profile/diplomes" element={<ProfileDiplome />} />
                            <Route exact path="/profile/diponibilites" element={<ProfileDispo />} />
                        </Route>
        
                        {/* search a worker to contact */}
                        <Route exact path="/searchcandidats" element={<SearchCandidats />} />
                        <Route path="/candidat/:id" element={<Candidat />} />
                        <Route path="/contact" element={<Contact />} />
                    {/* </>
                ) : (
                    <> */}
                        {/* Login & lost password */}
                        <Route exact path="/" element={<Login />} />
                        <Route exact path="/lostpass" element={<LostPass />} />

                        {/* Register */}
                        <Route exact path="/registercandidat" element={<RegisterCandidat />} />
                        <Route exact path="/registeremployeur" element={<RegisterEmployeur />} />
                        <Route exact path="/statusselector" element={<StatusSelector />} />
                    </>
                )}
			</Routes>

			<Footer />
		</NativeRouter>
	);
}