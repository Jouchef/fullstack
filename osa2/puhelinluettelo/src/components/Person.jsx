

const Person = ({ person, deletePerson }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      deletePerson(person.id);
    }
  }

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default Person