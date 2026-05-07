//domain,skills
import '../styles/Skills.css';
import { useState } from 'react';
export default function Skills({ data, onSave }) {
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
        <div className={`SkillsInfoContainer ${viewMode}`}>
            <h1 className="sectionHeader">Skills</h1>
            {componentUI}
        </div>
    );
}
function Preview({ data, onClick }) {
    return (
        <div className="SkillsInfo">
            {data.map((skills) => (
                <SkillsInfo data={skills} key={`skills-${skills.id}`}></SkillsInfo>
            ))}
            <div className="skillsControl">
                <button type="button" className="btn" onClick={onClick}>
                    Edit
                </button>
            </div>
        </div>
    );
}

function SkillsInfo({ data }) {
    return (
        <div id={`skills-${data.id}`} className="skillItem">
            <h3 className="skillsHeader">{data.domain}:</h3>
            <p className="skillSet">{data.skills}</p>
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
                domain: '',
                skills: '',
            },
        ]);
    }
    function updateDataValues(updatedData) {
        updateData((prev) => prev.map((item) => (item.id === updatedData.id ? updatedData : item)));
    }

    function handleRemove(id) {
        updateData((prev) => prev.filter((skills) => skills.id !== id));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave('Skills', newData);
        onSubmit();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="formControl">
                {newData.map((skills) => (
                    <SkillsInfoEdit
                        key={`skills-${skills.id}`}
                        data={skills}
                        onChange={updateDataValues}
                        onRemove={handleRemove}
                    ></SkillsInfoEdit>
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
function SkillsInfoEdit({ data, onChange, onRemove }) {
    function handleEdit(e) {
        const { name, value } = e.target;
        const updated = { ...data, [name]: value };
        onChange(updated);
    }
    return (
        <div className="SkillsInfoUpdate">
            <Input
                id={`skills-title-${data.id}`}
                type="text"
                value={data.domain}
                onChange={handleEdit}
                label="Domain"
                name="domain"
            ></Input>
            Skills :
            <textarea
                id={`skills-list-${data.id}`}
                type="text"
                value={data.skills}
                onChange={handleEdit}
                name="skills"
            ></textarea>
            <button type="button" onClick={() => onRemove(data.id)} className="btn">
                Delete
            </button>
        </div>
    );
}
function Input({ id, type, value, onChange, label, pattern, title, autoComplete, name }) {
    return (
        <>
            <label htmlFor={id}>{label} :</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                id={id}
                pattern={pattern}
                title={title}
                autoComplete={autoComplete}
                required
            />
        </>
    );
}
