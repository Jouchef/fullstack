import Country from './Country'
import CountryInfo from './CountryInfo'

const CountryList = ({ countries, setNewFilter, newFilter}) => {
    const matchingCountry = countries.find(country => country.name.common.toLowerCase() === newFilter.toLowerCase());


    if (countries.length > 10) {
        return (
            <div>
                Too many matches to list out. Specify your filter further!
            </div>
        )
    }

    if (countries.length === 1 ) {
        return (
            <div>
                <CountryInfo country={countries[0]} />
            </div>
        )
    }


    if (matchingCountry) {
        return (
            <div>
                <CountryInfo country={matchingCountry} />
            </div>
        );
    }


return (
    <div>
        {countries.map(country => 
            <Country 
            key = {country.name.common}
            country={country} 
            setNewFilter = {setNewFilter}
            />
        )} 
    </div>
)
}

export default CountryList