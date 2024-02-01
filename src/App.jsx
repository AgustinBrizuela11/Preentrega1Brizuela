import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/navbar'
import ItemListContainer from './components/IteamListContainer/ItemListContainer'
import Greeting from './components/Greeting/Greeting'


function App() {

  return (
    <>
  
  <NavBar/>
  <Greeting/>
  <ItemListContainer />

  

  </>
  )
}

export default App
