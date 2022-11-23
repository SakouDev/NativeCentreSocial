import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
import HeaderLarge from './src/components/HeaderLarge/HeaderLarge';
import Loader from './src/components/Loader/Loader';
import ProfileDiplome from './src/components/ProfileDiplome/ProfileDiplome';
import ProfileDispo from './src/components/ProfileDispo/ProfileDispo';
import ProfileGenerale from './src/components/ProfileGenerale/ProfileGenerale';
import Candidat from './src/pages/Candidat/Candidat';
import Contact from './src/pages/Contact/Contact';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import RegisterCandidat from "./src/pages/RegisterCandidat/RegisterCandidat";
import RegisterEmployeur from "./src/pages/RegisterEmployeur/RegisterEmployeur";
import StatusSelector from "./src/pages/StatusSelector/StatusSelector";
import LostPass from './src/pages/Lostpass/Lostpass';
import Profile from './src/pages/Profile/Profile'

import SearchCandidats from './src/pages/SearchCandidats/SearchCandidats';

export default function App() {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  if (loading) return <Loader />

  return (
      <NativeRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/registercandidat" element={<RegisterCandidat />} />
          <Route exact path="/registeremployeur" element={<RegisterEmployeur />} />
          <Route exact path="/statusselector" element={<StatusSelector />} />
          <Route exact path="/profile" element={<Profile />} >
            <Route exact path="/profile/generale" element={<ProfileGenerale />} />
            <Route exact path="/profile/diplomes" element={<ProfileDiplome />} />
            <Route exact path="/profile/diponibilites" element={<ProfileDispo />} />
          </Route>
          <Route exact path="/lostpass" element={<LostPass />} />
          <Route exact path="/searchcandidats" element={<SearchCandidats />} />
          <Route path="/candidat/:id" element={<Candidat />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <StatusBar backgroundColor="#003147" />

        <Footer />
      </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});