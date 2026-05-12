export default function Input({ id, type, value, onChange, label, pattern, title, min, max }) {
    return (
        <>
            <label htmlFor={id}>{label} :</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                id={id}
                name={id}
                pattern={pattern}
                title={title}
                min={min}
                max={max}
            />
        </>
    );
}
