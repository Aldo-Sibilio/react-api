import { useState, useEffect } from "react";
import ActorCard from "./components/ActorCard.jsx";

function App() {

  // stato per salvare la lista degli attori
  const [actors, setActors] = useState([]);

  // useEffect per richiedere dati al caricamento della pagina
  useEffect(() => {

    fetch("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella risposta del server");
        }
        return response.json();
      })
      .then((data) => {
        //stampa in console i dati ricevuti
        console.log("Dati ricevuti:", data);
        // salviamo i dati nello stato
        setActors(data);
      })
      .catch((error) => {
        console.error("Errore durante il caricamento:", error);
      });

  }, []); // array vuoto, viene eseguito solo al caricamento della pagina










































export default App