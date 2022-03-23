import { useEffect } from "react";

function Gallery() {
  return (
    <div>Gallery</div>
  )
}

function ButtonBar() {
  return (
    <div>ButtonBar</div>
  )
}

function App() {
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
