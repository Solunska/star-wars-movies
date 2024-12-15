export default function DropdownGroup({ containerClass, label, name, values, onChange, value }) {
    return (
        <div className={containerClass}>
            <p>{label}</p>
            <select
                name={name}
                onChange={(e) => onChange(name, e.target.value)}
                value={value}>
                {values.map((v) => (
                    <option key={v} value={value}>{v}</option>
                ))}
            </select>
        </div>
    );
}
