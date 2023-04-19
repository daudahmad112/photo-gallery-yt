import { useEffect, useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import axios from "axios";

function App() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://photogallery-hgt4.onrender.com/api/get")
    .then((res) => {
      console.log(res.data);
      setPhotos(res.data);
    })
  }, [] );

  return (
    <div className="App">
      <Navbar />
      <Grid photos={photos} />
      <Button/>
    </div>
  );
}

export default App;
