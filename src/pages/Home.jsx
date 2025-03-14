import React from 'react';
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import Devices from "../components/Devices";
import Questions from '../components/Questions';
import Plan from "../components/Plan";
import Trial from "../components/Trial";

function Home() {
  return (
    <>
    <Hero/>
    <Slider/>
    <Devices/>
    <Questions/>
    <Plan/>
    <Trial/>
    </>
  )
}

export default Home