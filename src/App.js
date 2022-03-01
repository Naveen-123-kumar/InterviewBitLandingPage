import { createTheme,responsiveFontSizes,ThemeProvider } from '@mui/material';
import React from 'react';
import DreamJob from './Components/DreamJob';
import FooterComponent1 from './Components/Footer/FooterComponent1';
import PaperComponent from './Components/PracticeProblem/PaperComponent';
import RadioCom from './Components/RadioComponent/RadioCom';
import ScallerAcadmy from './Components/ScallerAcadmy/ScallerAcadmy';
import TechInterview from './Components/TechInterview/TechInterview';
import VideoExplaination from './Components/VideoExplaination';
import BottomScroll from './Pages/BottomScroll';
import CodingEnviromentPage from './Pages/CodingEnviromentPage';
import FastCoursesPage from './Pages/FastCoursesPage';
import ImagePage from './Pages/ImagePage';
import MockInterviewPage from './Pages/MockInterviewPage';
import Navbar from './Pages/Navbar';
import TestimonialPage from './Pages/TestimonialPage';
const Theme =responsiveFontSizes(createTheme());
const App = () => {
  return (
    <ThemeProvider theme={Theme}>  
      <Navbar/>
      
      <TechInterview/>
      {/* <BottomScroll/> */}
      {/* <RadioCom/> */}
      {/* <ImagePage/> */}
      <TestimonialPage/>
      <ScallerAcadmy/>
      <PaperComponent/>
      <FastCoursesPage/>  
      <MockInterviewPage/>
       <VideoExplaination/>
       <CodingEnviromentPage/>
      <DreamJob/>
      <FooterComponent1/> 
    </ThemeProvider> 
  )
}

export default App
