import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Global from "./components/Global";
import Blog from "./components/Blog";
import Impact from "./components/Impact";
import Connexion from "./components/Connexion";
import Footer from "./components/Footer";



function App() {

  return (
    <>
      <div className='App'>
        <Header/>
        <main>
          <Hero/>
          <Global/>
          <Blog/>
          <Impact/>
          <Connexion/>
          <Footer/>
          

        </main>
      </div>
    </>
  )
}

export default App
