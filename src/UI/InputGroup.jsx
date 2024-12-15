export default function InputGroup({ containerClass, label, value, onChange, checked, inputClass }) {
    return <div className={containerClass}>
        <label htmlFor={`sort-${value}`}>{label}</label>
        <input
            className={inputClass}
            type="radio"
            name="sort"
            id="sort"
            value={value}
            checked={checked}
            onChange={(e) => onChange("sort", e.target.value)} />
    </div>
}