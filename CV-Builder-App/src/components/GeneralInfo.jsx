import { useState } from 'react';
import FormControl from './FormControl';
import Input from './Input';
import '../styles/GeneralInfo.css';
export default function GeneralInfo({ data, onSave, printMode }) {
    const [viewMode, setViewMode] = useState('preview');
    function updateView() {
        setViewMode((prev) => (prev === 'preview' ? 'edit' : 'preview'));
    }
    const componentUI =
        viewMode === 'preview' ? (
            <Preview data={data} onClick={updateView} printMode={printMode} />
        ) : (
            <Edit data={data} onSubmit={updateView} onSave={onSave} />
        );
    return <div className={`GeneralInfo ${viewMode}`}>{componentUI}</div>;
}

function Preview({ data, onClick, printMode }) {
    if (printMode) {
        return <PreviewMode data={data} />;
    } else {
        return (
            <>
                <PreviewMode data={data} />
                <FormControl onClick={onClick} />
            </>
        );
    }
}
function PreviewMode({ data }) {
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
        onSave('GeneralInfo', newData);
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
