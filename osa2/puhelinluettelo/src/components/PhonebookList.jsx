import Person from './Person'

const PhoneBookList = ({ personsToShow, deletePerson}) => {
  return (
    <div>
      <table>
        <tbody>
          {personsToShow.map(person => 
            <Person key={person.name} person={person} deletePerson={deletePerson} />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default PhoneBookList