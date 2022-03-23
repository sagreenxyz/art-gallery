import { useState, useEffect } from 'react';

const MOMAURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'

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
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to Artworld'
    fetch(`${MOMAURL}${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])
  return (
    <div className="App">
      <Gallery />
      <ButtonBar />
    </div>
  );
}

export default App;
