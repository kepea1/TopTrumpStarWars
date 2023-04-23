import "./index.css";

//import useeffect and useState from react
import { useEffect, useState } from "react";

//repass id as props when randmoly generating and set as dependency

function ComputerCard({ id, visible }) {
    //TODO: Task 1 - send http request to `https://pokeapi.co/api/v2/pokemon/1' and display the data
    const [planet, setPlanet] = useState("Planet Pending...");
    //console.log(id);
    useEffect(() => {
        async function fetchCard() {
            const response = await fetch(`https://swapi.dev/api/planets/${id}`);
            const data = await response.json();
            console.log(data);
            setPlanet(data);
        }
        fetchCard();
    }, [id]);
    
    if (visible === true) {
        return (
            <div className="computer-card">
                <h1 className="title">Planet Name: {planet.name}</h1>

                <div className="statistic">
                    <p className="stat_name">Rotation Period: </p>
                    <p className="stat_value">{planet.rotation_period}</p>
                </div>

                <div className="statistic">
                    <p className="stat_name">Orbital Period:</p>
                    <p className="stat_value">{planet.orbital_period}</p>
                </div>

                <div className="statistic">
                    <p className="stat_name">Diameter: </p>
                    <p className="stat_value">{planet.diameter}</p>
                </div>

                <div className="statistic">
                    <p className="stat_name">Population: </p>
                    <p className="stat_value">{planet.population}</p>
                </div>

                <div className="statistic">
                    <p className="stat_name">Surface Water:</p>
                    <p className="stat_value">{planet.surface_water}</p>
                </div>
            </div>
        );
    }
}

export default ComputerCard;
