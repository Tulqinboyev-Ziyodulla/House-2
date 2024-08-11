import { useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Kategorey from './components/kategorey/Kategorey'
import Main from "./components/main/Main"
import Footer from './components/footer/Footer'


function App() {


  return (
    <>
      <Header />
      <Hero />
      <Kategorey/>
      <Main></Main>
      <Footer/>
    </>
  )
}

export default App
