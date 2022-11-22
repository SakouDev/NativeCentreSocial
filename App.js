import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { Link, NativeRouter, Route, Routes } from 'react-router-native';
import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
import HeaderLarge from './src/components/HeaderLarge/HeaderLarge';
import Loader from './src/components/Loader/Loader';
import Contact from './src/pages/Contact/Contact';
import Home from './src/pages/Home/Home';
import Login from './src/pages/Login/Login';
import RegisterCandidat from "./src/pages/RegisterCandidat/RegisterCandidat";
import RegisterEmployeur from "./src/pages/RegisterEmployeur/RegisterEmployeur";
import StatusSelector from "./src/pages/StatusSelector/StatusSelector";

export default function App() {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  if (loading) return <Loader />

  return (
      <View style={{flex:1, backgroundColor: '#003147', paddingTop: 40}}>
      <NativeRouter>
        <HeaderLarge/>

        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/registercandidat" element={<RegisterCandidat/>} />
          <Route exact path="/registeremployeur" element={<RegisterEmployeur/>} />
          <Route exact path="/statusselector" element={<StatusSelector/>} />
        </Routes>

        <StatusBar backgroundColor="#003147" />

        <Footer/>
      </NativeRouter>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height : '100%',
    width : '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});