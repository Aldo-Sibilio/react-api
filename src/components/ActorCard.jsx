function ActorCard({ actor }) {
  return (
    <div className="col">
      <div className="card h-100">

        <img
          src={actor.image}
          className="card-img-top"
          alt={actor.name}
        />

        <div className="card-body">
          <h5 className="card-title">{actor.name}</h5>
          <p className="card-text">
            <strong>Anno di nascita:</strong> {actor.birth_year}
          </p>
          <p className="card-text">
            <strong>Nazionalità:</strong> {actor.nationality}
          </p>
          <p className="card-text">{actor.biography}</p>
        </div>

        <div className="card-footer">
          <strong>Riconoscimenti:</strong> {actor.awards}
        </div>

      </div>
    </div>
  );
}

export default ActorCard;