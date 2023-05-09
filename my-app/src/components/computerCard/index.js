import "./index.css";

//import useeffect and useState from react
import { useEffect, useState } from "react";

//repass id as props when randmoly generating and set as dependency

function ComputerCard({ id, visible, setComputerCard, compPlanet }) {
    //TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data
    // const [planet, setPlanet] = useState("Planet Pending...");
    // //console.log(id);
    // useEffect(() => {
    //     async function fetchCard() {
    //         const response = await fetch(`https://swapi.dev/api/planets/${id}`);
    //         const data = await response.json();
    //         console.log(data);
    //         setPlanet(data);
    //     }
    //     fetchCard();
    // }, [id]);
    
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
                    <p className="stat_name">Orbital Period:</p>
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
    }
}

export default ComputerCard;
