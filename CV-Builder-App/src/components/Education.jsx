import { useState } from 'react';

export default function Education({ data, onSave }) {
    const [viewMode, setViewMode] = useState('preview');
    function updateView() {
        setViewMode((prev) => (prev === 'preview' ? 'edit' : 'preview'));
    }
    const componentUI =
        viewMode === 'preview' ? (
            <Preview data={data} onClick={updateView} />
        ) : (
            <Edit data={data} onSubmit={updateView} onSave={onSave} />
        );
    return (
        <div className="EducationInfo">
            <h1 className="sectionHeader">Education</h1>
            {componentUI}
        </div>
    );
}

function Preview({ data, onClick }) {
    return (
        <>
            {data.map((university) => (
                <UniversityInfo data={university} key={university.id}></UniversityInfo>
            ))}
            <div className="formControl">
                <button type="button" className="btn" onClick={onClick}>
                    Edit
                </button>
            </div>
        </>
    );
}
function UniversityInfo({ data }) {
    return (
        <div className="UniversityInfo">
            <div className="UniversityHeader">
                <p className="universityName">{data.universityName}</p>
                <p className="graduationDate">{data.graduationDate}</p>
            </div>
            <div className="degreeInfo">
                <p className="degreeName">{data.degreeName}</p>
                <p className="notableCourses">{data.notableCourses}</p>
            </div>
        </div>
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
        onSave('EducationInfoData', newData);
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
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
