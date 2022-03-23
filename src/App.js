import { useState, useEffect } from 'react';

const MOMAURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'

function Gallery(props) {
  return (
    <div style={{ 'width': '100%' }}>
      <img src={props.objectImg} alt={props.title} />
      <p>{props.artist}</p>
    </div>
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
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar />
    </div>
  );
}

export default App;
