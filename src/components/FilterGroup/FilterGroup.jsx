import "./FilterGroup.css";

function FilterGroup({ title, inputType, options, selected, onChange }) {
  return (
    <div className="filter-group">
      <h4 className="filter-group__title">{title}</h4>
      {options.map((option, index) => {
        const value = option.value ?? option.text;
        const checked =
          inputType === "radio"
            ? selected === value
            : Array.isArray(selected) && selected.includes(value);

        return (
          <label key={`${value}-${index}`} className="filter-group__option">
            <input
              type={inputType}
              name={`filter-${title}`}
              value={value}
              checked={checked}
              onChange={() => onChange?.(value)}
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </div>
  );
}

export default FilterGroup;
