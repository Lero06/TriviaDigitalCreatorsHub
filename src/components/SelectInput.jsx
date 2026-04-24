function SelectInput({ label, value, onChange, options }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>

      <select
        className="form-select"
        value={value}
        onChange={onChange}
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput