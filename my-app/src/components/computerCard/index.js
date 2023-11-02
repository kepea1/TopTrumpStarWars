import "./index.css";

//repass id as props when randmoly generating and set as dependency

function ComputerCard({ id, visible, setComputerCard, compPlanet }) {
  if (visible === true) {
    return (
      <div className="computer-card">
        <h1 className="title">Planet Name: {compPlanet.name}</h1>

        <div className="statistic">
          <p className="stat_name">Rotation Period: </p>
          <p className="stat_value">{compPlanet.rotation_period}</p>
          <br type="checkbox"></br>
        </div>

        <div className="statistic">
          <p className="stat_name">orbital Period:</p>
          <p className="stat_value">{compPlanet.orbital_period}</p>
          <br type="checkbox"></br>
        </div>

        <div className="statistic">
          <p className="stat_name">Diameter: </p>
          <p className="stat_value">{compPlanet.diameter}</p>
          <br type="checkbox"></br>
        </div>

        <div className="statistic">
          <p className="stat_name">Population: </p>
          <p className="stat_value">{compPlanet.population}</p>
          <br type="checkbox"></br>
        </div>

        <div className="statistic">
          <p className="stat_name">Surface Water:</p>
          <p className="stat_value">{compPlanet.surface_water}</p>
          <br type="checkbox"></br>
        </div>
      </div>
    );
  } else {
    return <div className="computer-card"></div>;
  }
}

export default ComputerCard;