import { useState, useEffect } from 'react'
import FilterInput from './components/FilterInput'
import CountryList from './components/countryList'
import countryService from './services/countries'



const App = () => {
  const [newFilter, setNewFilter] = useState("finland") //jätetty tarkoituksella "finland"
  const [countries, setCountries] = useState([])
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))
 

  useEffect(() => {
    countryService.getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
        console.log("initialCountries: ", initialCountries)
      })
  }, [])


  const handleInputChange = (placeHolderFunction) => (event) => {
    placeHolderFunction(event.target.value)
    console.log("New filter:", event.target.value)
  }


  return (
    <div>
      <FilterInput
        value={newFilter}
        onChange={handleInputChange(setNewFilter)}
      />
      <CountryList
        countries={countriesToShow}
        setNewFilter={setNewFilter}
        newFilter={newFilter}
      />

    </div>
  )

}

export default App