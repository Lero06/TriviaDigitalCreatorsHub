function SelectInput({ label, value, onChange, options }) {
  return (
    <div className="mb-3 text-center">
      <label className="form-label text-secondary d-block fs-4 fw-bold">
        {label}
      </label>

      <select
        className="form-select form-select-lg text-secondary mx-auto"
        value={value}
        onChange={onChange}
        style={{ 
          width: '400px', 
          margin: '0 auto',
          textAlign: 'center',
          textAlignLast: 'center'
        }}
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