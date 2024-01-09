const Country = ({ country, setNewFilter }) => {

    const showCountryInfo = () => {
        console.log("showCountryInfo: ", country.name.common)
        setNewFilter(country.name.common)
    }

    return (
        <li>
            {country.name.common}
            <button onClick={showCountryInfo}>show</button>            
        </li>
    )


}


export default Country