import { useEffect, useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import axios from "axios";

function App() {

  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");

  useEffect(() => {
    axios.get("https://photogallery-hgt4.onrender.com/api/get")
    .then((res) => {
      console.log(res.data);
      setPhotos(res.data);
    })
  }, [updateUI] );

  return (
    <div className="App">
      <Navbar />
      <Grid photos={photos} />
      <Button setUpdateUI={setUpdateUI} />
    </div>
  );
}

export default App;
