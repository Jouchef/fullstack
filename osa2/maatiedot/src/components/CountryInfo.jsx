import Country from "./Country"
import CountryWeather from "./CountryWeather"

const CountryInfo = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>
                capital <b>{country.capital[0]}</b>
            </div>
            <div>
                area <b>{country.area}</b>
            </div>
            <h2>languages</h2>
            <ul>
                {Object.values(country.languages).map(language =>
                    <li key={language}>{language}</li>
                )}
            </ul>
            <img src={country.flags.png} alt="Flag" width="200"></img>
            <div>
            <CountryWeather capital={country.capital} />
            </div>
        </div>

    )
}

export default CountryInfo