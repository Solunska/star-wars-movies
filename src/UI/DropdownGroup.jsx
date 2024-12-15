export default function DropdownGroup({ containerClass, label, name, values, onChange, value }) {
    return (
        <div className={containerClass}>
            <p>{label}</p>
            <select
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}>
                {values.map((v) => (
                    <option key={v} value={v}>{v}</option>
                ))}
            </select>
        </div>
    );
}
