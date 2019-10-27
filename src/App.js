import React from 'react'
import './resources/styles.css'

import Header from './components/header-footer/Header'
import Featured from './components/featured'
import VenueNfo from './components/venueNFO'
import Highlight from './components/highlights'
import Pricing from './components/pricing'

function App() {
  return (
    <div className="App">
      <Header />
      <Featured />
      <VenueNfo />
      <Highlight />
      <Pricing />
    </div>
  );
}

export default App;
