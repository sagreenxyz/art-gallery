import { useState, useEffect } from "react";

const MOMAURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'

function Gallery(props) {
  return (
    <div>
      <img style={{ 'width': '500px' }}
        src={props.objectImg}
        alt={props.title}
      />
      <p>{props.artist}</p>
    </div>
  )
}

function ButtonBar() {
  return (
    <div>ButtonBar</div>
  )
}

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'

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
