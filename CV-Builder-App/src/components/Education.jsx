import { useState } from 'react';
import '../styles/Education.css';
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
        <div className={`EducationInfo ${viewMode}`}>
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
    const [newData, updateData] = useState(data);
    function handleAdd(e) {
        e.preventDefault();
        updateData((prev) => [
            ...prev,
            {
                id: prev.length ? prev.at(-1).id + 1 : 1,
                universityName: '',
                degreeName: '',
                graduationDate: '',
                notableCourses: '',
            },
        ]);
    }
    function updateDataValues(updatedData) {
        updateData(newData.map((item) => (item.id === updatedData.id ? updatedData : item)));
    }
    function handleRemove(id) {
        updateData(newData.filter((university) => university.id !== id));
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSave('Education', newData);
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="formControl">
                {newData.map((university) => (
                    <UniversityInfoEdit
                        data={university}
                        key={university.id}
                        onChange={updateDataValues}
                        onRemove={handleRemove}
                    ></UniversityInfoEdit>
                ))}

                <div className="formControl-btn">
                    <button type="button" className="btn" onClick={handleAdd}>
                        Add New
                    </button>
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}
function UniversityInfoEdit({ data, onChange, onRemove }) {
    const [newData, setNewData] = useState(data);

    function handleEdit(e) {
        const updated = {
            ...newData,
            [e.target.id]: e.target.value,
        };
        setNewData(updated);
        onChange(updated);
    }
    return (
        <div className="UniversityInfoUpdate">
            <Input
                id="universityName"
                type="text"
                value={newData.universityName}
                onChange={handleEdit}
                label="University Name"
                pattern="^[A-Za-z0-9\s.,&()-]{2,}$"
                title="Enter a valid university name"
            ></Input>
            <Input
                id="graduationDate"
                type="text"
                value={newData.graduationDate}
                onChange={handleEdit}
                label="Graduation Date"
                pattern="^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$"
                title="Format: May 2023"
            ></Input>
            <Input
                id="degreeName"
                type="text"
                value={newData.degreeName}
                onChange={handleEdit}
                label="Degree Name"
                pattern="^[A-Za-z0-9\s.,()-]{2,}$"
                title="Enter a valid degree name"
            ></Input>
            <label htmlFor="notableCourses">Notable Courses : </label>
            <textarea
                id="notableCourses"
                type="text"
                value={newData.notableCourses}
                onChange={handleEdit}
                cols={50}
                rows={2}
                pattern="^.{5,}$"
                title="Enter at least 5 characters"
            ></textarea>

            <button type="Button" onClick={() => onRemove(newData.id)} className="btn">
                Delete
            </button>
        </div>
    );
}

function Input({ id, type, value, onChange, label, pattern, title }) {
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
                required
            />
        </>
    );
}
