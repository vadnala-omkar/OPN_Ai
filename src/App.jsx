import { useState } from 'react'
import Navbar from './components/Navbar'
import ImageGenerator from './components/ImageGenerator'
import AIChatbot from './components/AIChatbot'
import Translator from './components/Translator'
import FileConverter from './components/FileConverter'
import FirstPage from './pages/FirstPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/ImageGenerator" element={<ImageGenerator />} />
        <Route path="/AIChatbot" element={<AIChatbot />} />
        <Route path="/Translator" element={<Translator />} />
        <Route path="/FileConverter" element={<FileConverter />} />
      </Routes>
    </BrowserRouter>
      
    </>




    // <>
    //   <Navbar />
    //   <HomeSection />
    //   <GallerySection />

    //   {/* <ImageGenerator />
    //   <AIChatbot />
    //   <Translator />
    //   <FileConverter /> */}

    //   <ToolsSection />
    //   <AboutSection />
    //   <Contact />
    // </>
  )
}

export default App
