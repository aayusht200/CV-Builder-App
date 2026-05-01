import { useState } from 'react';

export default function GeneralInfo({ data }) {
    const [viewMode, setViewMode] = useState('preview');
    const [currentData, setCurrentData] = useState(data);
    function updateView() {
        setViewMode((prev) => (prev === 'preview' ? 'edit' : 'preview'));
    }
    function updateCurrentData(newData) {
        setCurrentData(newData);
    }
    const componentUI =
        viewMode === 'preview' ? (
            <Preview data={currentData} onClick={updateView} />
        ) : (
            <Edit data={currentData} onSubmit={updateView} onSave={updateCurrentData} />
        );
    return <div className="GeneralInfo">{componentUI}</div>;
}

function Preview({ data, onClick }) {
    return (
        <>
            <div className="userName">
                <h1>
                    {data.firstName} {data.lastName}
                </h1>
            </div>
            <div className="ContactDetails">
                <p className="email">{data.email}</p>
                <p className="contactNumber">{data.contactNumber}</p>
            </div>
            <div className="ContactLinks">
                <a href={data.linkedin} className="link">
                    LinkedIn
                </a>
                <a href={data.github} className="link">
                    Github
                </a>
            </div>
            <div className="SummarySection">{data.summary}</div>
            <div className="formControl">
                <button type="button" className="btn" onClick={onClick}>
                    Edit
                </button>
            </div>
        </>
    );
}
function Edit({ data, onSubmit, onSave }) {
    const [newData, setNewData] = useState(data);

    function handleEdit(e) {
        setNewData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave(newData);
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="userName">
                <Input id="firstName" type="text" value={newData.firstName} onChange={handleEdit} label="First Name" />
                <Input id="lastName" type="text" value={newData.lastName} onChange={handleEdit} label="Last Name" />
            </div>

            <div className="ContactDetails">
                <Input id="email" type="email" value={newData.email} onChange={handleEdit} label="Email" />
                <Input
                    id="contactNumber"
                    type="tel"
                    value={newData.contactNumber}
                    onChange={handleEdit}
                    label="Contact Number"
                    pattern="^\+[0-9]{2}\s[0-9]{10}$"
                    title="Format: +91 8879073846"
                />
            </div>

            <div className="ContactLinks">
                <Input
                    id="linkedin"
                    type="url"
                    value={newData.linkedin}
                    onChange={handleEdit}
                    label="LinkedIn"
                    pattern="https:\/\/(www\.)?linkedin\.com\/.*"
                    title="Enter a valid LinkedIn profile URL"
                />
                <Input
                    id="github"
                    type="url"
                    value={newData.github}
                    onChange={handleEdit}
                    label="Github"
                    pattern="https:\/\/(www\.)?github\.com\/.*"
                    title="Enter a valid GitHub profile URL"
                />
            </div>

            <div className="SummarySection">
                <label htmlFor="summary">Summary :</label>
                <textarea id="summary" value={newData.summary} cols={50} rows={10} onChange={handleEdit} />
            </div>

            <div className="formControl">
                <button type="submit" className="btn">
                    Submit
                </button>
            </div>
        </form>
    );
}
function Input({ id, type, value, onChange, label, pattern, title }) {
    return (
        <>
            <label htmlFor={id}>{label} :</label>
            <input type={type} value={value} onChange={onChange} id={id} name={id} pattern={pattern} title={title} />
        </>
    );
}
