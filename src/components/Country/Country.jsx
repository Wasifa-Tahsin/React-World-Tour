import { useState } from 'react';
import './Country.css'
import CountryDetail from '../Country.Detail/CountryDetail';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
   const {name,flags,population,area,cca3}=country

   const [visited,setVisited]=useState(false)
   const handleVisited=()=>{
    setVisited(!visited)
   }


 

    return (
        <div className={`country ${visited && 'visited' }`}>
            <h3 style={{color:visited ? 'red' : 'black'}}>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p> Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>mark visited</button>
            <br></br>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br></br>
            <button onClick={handleVisited}>{visited ? 'Visited' :'Going'}</button>
            
           {visited ? 'i have visited this country' : 'i want to visited' }
           <hr />
           <CountryDetail  country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}></CountryDetail>
        </div>
    );
};

export default Country;