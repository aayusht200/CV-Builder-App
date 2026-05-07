export default function FormControl({ onClick }) {
    return (
        <>
            <div className="formControl-edit">
                <button type="button" className="btn" onClick={onClick}>
                    Edit
                </button>
            </div>
        </>
    );
}
