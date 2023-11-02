import "./index.css";

//repass id as props when randmoly generating and set as dependency

function HumanCard({
  id,
  childToParent,
  comparescores,
  planet,
  userChoise,
  setUserChoise,
}) {
  return (
    <div className="human-card">
      <h1 className="title">Planet Name: {planet.name}</h1>

      <div className="statistic">
        <p className="stat_name">Rotation Period: </p>
        <p className="stat_value">{planet.rotation_period}</p>
        <input
          type="radio"
          name="planet_stat"
          onClick={() => {
            setUserChoise(["rotation_period", planet.rotation_period]);
          }}
        ></input>
      </div>

      <div className="statistic">
        <p className="stat_name">Orbital Period:</p>
        <p className="stat_value">{planet.orbital_period}</p>
        <input
          type="radio"
          name="planet_stat"
          onClick={() => {
            setUserChoise(["orbital_period", planet.orbital_period]);
          }}
        ></input>
      </div>

      <div className="statistic">
        <p className="stat_name">Diameter: </p>
        <p className="stat_value">{planet.diameter}</p>
        <input
          // className="checkbox"
          type="radio"
          name="planet_stat"
          onClick={() => {
            setUserChoise(["diameter", planet.diameter]);
          }}
        ></input>
      </div>

      <div className="statistic">
        <p className="stat_name">Population: </p>
        <p className="stat_value">{planet.population}</p>
        <input
          type="radio"
          name="planet_stat"
          onClick={() => {
            setUserChoise(["population", planet.population]);
          }}
        ></input>
      </div>

      <div className="statistic">
        <p className="stat_name">Surface Water:</p>
        <p className="stat_value">{planet.surface_water}</p>
        <input
          type="radio"
          name="planet_stat"
          onClick={() => {
            setUserChoise(["surface_water", planet.surface_water]);
          }}
        ></input>
      </div>
    </div>
  );
}

export default HumanCard;

//if checkbox value = true (checked)
//store stat_name and stat_value in variable (as an object)
//go to computerCard and find stat_name and compare stat_value of both cards
//return winner
