import { useState, useEffect } from "react";
import ActorCard from "./components/ActorCard.jsx";
import "./ActorCardStyle.css";
import "./App.css";

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

  return (
    <>
      {/* barra blu in alto */}

      <header className="topbar">
        Wonderful Cast
      </header>

      <div className="page-title">
        <h1>Actors</h1>
        <p>List of actors fetched from an API</p>


        {/*lista delle card */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {actors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      </div >
    </>
  );
}



export default App