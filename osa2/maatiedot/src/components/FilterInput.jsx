const FilterInput = ({ value, onChange }) => {
    return (
      <div>
        Find countries:  
        <input 
          value={value}
          onChange={onChange}
          style={{ width: "200px" }}
        />
      </div>
    )
  }

export default FilterInput