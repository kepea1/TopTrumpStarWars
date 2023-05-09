import "./index.css";
import { useEffect, useState } from "react";

//repass id as props when randmoly generating and set as dependency

function HumanCard({ id, childToParent,comparescores,planet }) {
 

    
        return (

            //need to save which ever stat is checked
            //and then compare it to the other card
            //and then return the winner
            //if checked, save stat_name and stat_value in variable
            //go to computerCard and find stat_name and compare stat_value of both cards
            //return winner

        <div className="human-card">
            <h1 className="title">Planet Name: {planet.name}</h1>

            <div className="statistic">
                <p className="stat_name">Rotation Period: </p>
                <p className="stat_value">{planet.rotation_period}</p>
                <input
                    type="checkbox"
                    onClick={() => 
                        // childToParent(`Rotation Period(${planet.rotation_period})`)
                        {comparescores(["rotation_period",planet.rotation_period])}
                        // comparescores(let userChoise =`(${planet.rotation_period})`)

                        
                    }
                ></input>
            </div>

            <div className="statistic">
                <p className="stat_name">Orbital Period:</p>
                <p className="stat_value">{planet.orbital_period}</p>
                <input type="checkbox"  onClick={() =>{comparescores(["orbital_period",planet.orbital_period])}                    }></input>
            </div>

            <div className="statistic">
                <p className="stat_name">Diameter: </p>
                <p className="stat_value">{planet.diameter}</p>
                <input type="checkbox" onClick={() => {comparescores(["diameter",planet.diameter])}
                    }></input>
            </div>

            <div className="statistic">
                <p className="stat_name">Population: </p>
                <p className="stat_value">{planet.population}</p>
                <input type="checkbox" onClick={() =>
                {comparescores(["population",planet.population])}
                     }></input>
            </div>

            <div className="statistic">
                <p className="stat_name">Surface Water:</p>
                <p className="stat_value">{planet.surface_water}</p>
                <input type="checkbox" onClick={() =>
            {comparescores(["surface_water",planet.surface_water])}}></input>
            </div>
        </div>
    )
    ;
}

export default HumanCard;

//if checkbox value = true (checked)
//store stat_name and stat_value in variable (as an object)
//go to computerCard and find stat_name and compare stat_value of both cards
//return winner
