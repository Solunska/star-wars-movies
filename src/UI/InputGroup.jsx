export default function InputGroup({ containerClass, label,value, onChange, checked }) {
    return <div className={containerClass}>
        <p>{label}</p>
        <input
            type="radio"
            name="sort"
            id="sort"
            value={value}
            checked={checked}
            onChange={(e) => onChange("sort", e.target.value)} />
    </div>
}