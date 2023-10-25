import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/navbar'
import ItemListContainer from './components/IteamListContainer/ItemListContainer'

function App() {
  
  const greeting = "Bienvenidos a la tienda de Iphone"

  return (
    <>
  <NavBar/>
  <ItemListContainer mensaje={greeting}/>

  </>
  )
}

export default App
