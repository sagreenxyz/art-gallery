import { useState, useEffect } from 'react';

function Gallery() {
  return (
    <div>Gallery</div>
  )
}

function ButtonBar() {
  return (
    <div>Button Bar</div>
  )
}

function App() {
  // State variables here...
  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
  })
  return (
    <div className="App">
      <Gallery />
      <ButtonBar />
    </div>
  );
}

export default App;
