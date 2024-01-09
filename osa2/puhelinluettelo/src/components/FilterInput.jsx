const FilterInput = ({ value, onChange }) => {
    return (
      <div>
        Search by name:  
        <input 
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }

export default FilterInput