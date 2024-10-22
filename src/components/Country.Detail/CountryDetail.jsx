import CountryData from "../CountryData/CountryData"

const CountryDetail = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    // const {country,handleVisitedCountry,handleVisitedFlags}=props
    return (
        <div>
            <h4>Country Detail</h4>
            <hr />
          <CountryData   country={country}
        handleVisitedCountry={handleVisitedCountry}

        handleVisitedFlags={handleVisitedFlags}>
       

          </CountryData>
          {/* <CountryData {...props}></CountryData> */}
        </div>
    );
};

export default CountryDetail;