

const CountryData = ({country,handleVisitedCountry,handleVisitedFlags}) => {
console.log('wow',country,handleVisitedCountry,handleVisitedFlags);
    return (
        <div>
            <p><small>Country Data:{country.name.common}</small></p>
        </div>
    );
};

export default CountryData;