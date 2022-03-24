import { useState, useEffect } from "react";
import Gallery from './components/Gallery'

const MOMAURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'

function ButtonBar(props) {
  return (
    <div>
      <button value={-5} onClick={props.handleIterate}>Way Back</button>
      <button value={-1} onClick={props.handleIterate}>Back</button>
      <button value={1} onClick={props.handleIterate}>Next</button>
      <button value={5} onClick={props.handleIterate}>Big Next</button>
    </div>
  )
}

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'

    fetch(`${MOMAURL}${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))

  }, [artId])

  return (
    <div className="App">
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
