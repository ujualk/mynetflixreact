import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {Comedy, Documentaries, Horror, Romance, action,originals} from './urls'

function App() {


  return (
    <>
    <Navbar/> 
    <Banner/>
    <RowPost url={originals} title="Netflix Originals"/>
    <RowPost url={action} title="Action Movies" isSmall={true}/>
    <RowPost url={Comedy} title="Comedy Movies" isSmall={true}/>
    <RowPost url={Romance} title="Romance Movies" isSmall={true}/>
    <RowPost url={Documentaries} title="Documentaries" isSmall={true}/>
    <RowPost url={Horror} title="Horror Movies" isSmall={true}/>
    
    </>
  )
}

export default App
