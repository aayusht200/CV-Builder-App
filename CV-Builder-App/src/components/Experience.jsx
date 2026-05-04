// company,title,start_date,end_date,responsiblities
import { useState } from 'react';
export default function Experience({ data, onSave }) {
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
        <div className="ExperienceInfo">
            <h1 className="sectionHeader">Work Experience</h1>
            {componentUI}
        </div>
    );
}
function Preview({ data, onClick }) {
    return (
        <>
            {data.map((experience) => (
                <ExperienceInfo data={experience} key={experience.id}></ExperienceInfo>
            ))}
            <div className="formControl">
                <button type="button" className="btn" onClick={onClick}>
                    Edit
                </button>
            </div>
        </>
    );
}
function ExperienceInfo({ data }) {
    return (
        <div className="ExperienceInfo">
            <div className="ExperienceHeader">
                <p className="companyNameTitle">
                    {data.company} - {data.positionTitle}
                </p>
                <p className="experienceDate">
                    {data.startDate} - {data.endDate}
                </p>
            </div>
            <div className="responsibilities">
                <ul className="responsibilitiesList">
                    {data.responsibilities.map((responsibility) => (
                        <li key={responsibility.id}>{responsibility.text}</li>
                    ))}
                </ul>
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
                company: '',
                positionTitle: '',
                startDate: '',
                endDate: '',
                responsibilities: [{ id: 1, text: '' }],
            },
        ]);
    }

    function updateDataValues(updatedData) {
        updateData((prev) => prev.map((item) => (item.id === updatedData.id ? updatedData : item)));
    }

    function handleRemove(id) {
        updateData((prev) => prev.filter((experience) => experience.id !== id));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave('ExperienceData', newData);
        onSubmit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="formControl">
                {newData.map((experience) => (
                    <ExperienceInfoEdit
                        data={experience}
                        key={experience.id}
                        onChange={updateDataValues}
                        onRemove={handleRemove}
                    />
                ))}

                <button type="button" className="btn" onClick={handleAdd}>
                    Add New
                </button>
                <button type="submit" className="btn">
                    Submit
                </button>
            </div>
        </form>
    );
}
function ExperienceInfoEdit({ data, onChange, onRemove }) {
    function handleEdit(e) {
        const updated = {
            ...data,
            [e.target.id]: e.target.value,
        };

        onChange(updated);
    }

    function handleListItem(e, id) {
        const updatedResponsibilities = data.responsibilities.map((item) =>
            item.id === id ? { ...item, text: e.target.value } : item
        );

        const updated = {
            ...data,
            responsibilities: updatedResponsibilities,
        };

        onChange(updated);
    }

    function removeListItem(id) {
        const updatedResponsibilities = data.responsibilities.filter((item) => item.id !== id);

        const updated = {
            ...data,
            responsibilities: updatedResponsibilities,
        };

        onChange(updated);
    }

    function addNewListItem() {
        const newListItem = [
            ...data.responsibilities,
            {
                id: data.responsibilities.length ? data.responsibilities.at(-1).id + 1 : 1,
                text: '',
            },
        ];

        const updated = { ...data, responsibilities: newListItem };

        onChange(updated);
    }

    return (
        <div className="ExperienceInfoUpdate">
            <Input id="company" type="text" value={data.company} onChange={handleEdit} label="Company Name" />

            <Input
                id="positionTitle"
                type="text"
                value={data.positionTitle}
                onChange={handleEdit}
                label="Position Title"
                title="Enter a valid position title"
            />

            <Input
                id="startDate"
                type="text"
                value={data.startDate}
                onChange={handleEdit}
                label="Start Date"
                pattern="^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$"
                title="Format: May 2023"
            />

            <Input
                id="endDate"
                type="text"
                value={data.endDate}
                onChange={handleEdit}
                label="End Date"
                pattern="^((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}|Present|present)$"
                title="Format: May 2023 | Present"
            />

            <div className="responsibilities">
                <ul className="responsibilitiesList">
                    {data.responsibilities.map((responsibility) => (
                        <li key={responsibility.id}>
                            <Input
                                id={responsibility.id}
                                type="text"
                                value={responsibility.text}
                                onChange={(e) => handleListItem(e, responsibility.id)}
                            />
                            <button type="button" onClick={() => removeListItem(responsibility.id)} className="btn">
                                ❌
                            </button>
                        </li>
                    ))}

                    <button type="button" onClick={addNewListItem} className="btn">
                        Add New
                    </button>
                </ul>
            </div>
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
