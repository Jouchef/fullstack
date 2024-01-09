import { useState, useEffect } from 'react'
import FilterInput from './components/FilterInput'
import PersonForm from './components/PersonForm'
import PhoneBookList from './components/PhonebookList'
import personService from './services/persons'
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('a new person...')
  const [newNumber, setNewNumber] = useState('a new number...')
  const [newFilter, setNewFilter] = useState('')
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleInputChange = (placeHolderFunction) => (event) => {
    placeHolderFunction(event.target.value);
  }

  const personInPhonebook = (newPerson) => {
    return persons.some(person => person.name.toLowerCase() === newPerson.name.toLowerCase());
  }

  const idOfPerson = (newPerson) => {
    return persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase()).id
  }

  const updatePersonsNumber = (id, newPerson) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = { ...person, number: newPerson.number }

    if (window.confirm(`${newName} is already added to phonebook, replace the old number(${person.number}) with a new one (${changedPerson.number})?`)) {

      personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        sendNotification(`Updated ${returnedPerson.name} to Phonebook`)
      })
      .catch(error => {
        sendNotification(`Error: The person '${person.name}, with following number ${person.id}' seems to be deleted from server. You may add the person again.`)

        setPersons(persons.filter(p => p.id !== id))
      })
    }
    else {
      console.log("cancel")
      setNewName(changedPerson.name)
      setNewNumber(changedPerson.number)
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: newNumber
    }
    console.log("newName:", newName, "newNumber:", newNumber) 
    console.log("personInPhonebook", personInPhonebook(personObject)) 

    personObject.name.length < 1 
    ? sendNotification(`Error: Name must be at least 1 character long.`) 
    : 
  
    personInPhonebook(personObject)
      ? updatePersonsNumber(idOfPerson(personObject), personObject)
      : personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          sendNotification(`Added ${returnedPerson.name} to Phonebook`)
        })
    console.log("persons:", persons)
  }

  const sendNotification = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)

    personService
      .remove(id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== id))
        sendNotification(`Deleted ${person.name} from Phonebook`)
      })
      .catch(error => {
        sendNotification(
          `Error: The person '${person.name} seems to already be deleted from the server.`
          )
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <FilterInput 
        value={newFilter}
        onChange={handleInputChange(setNewFilter)}
      />
      <h2>Add a new person</h2>
      <PersonForm 
        nameValue={newName}
        onNameChange={handleInputChange(setNewName)}
        numberValue={newNumber}
        onNumberChange={handleInputChange(setNewNumber)}
        onSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <PhoneBookList personsToShow={personsToShow} deletePerson={deletePerson} />

    </div>
  )

}

export default App