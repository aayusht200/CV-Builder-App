//projectTitle,domain,startDate,endDate,projectDesc,projectLinks
import '../styles/Projects.css';
import { useState } from 'react';
export default function Projects({ data, onSave }) {
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
        <div className={`ProjectInfoContainer ${viewMode}`}>
            <h1 className="sectionHeader">Projects</h1>
            {componentUI}
        </div>
    );
}
function Preview({ data, onClick }) {
    return (
        <div className="ProjectInfo">
            {data.map((project) => (
                <ProjectInfo data={project} key={`project-${project.id}`}></ProjectInfo>
            ))}
            <div className="formControl">
                <button type="button" className="btn" onClick={onClick}>
                    Edit
                </button>
            </div>
        </div>
    );
}
function ProjectInfo({ data }) {
    return (
        <div className="projectDiv">
            <div className="ProjectHeader">
                <p className="companyNameTitle">
                    {data.projectTitle} - {data.domain}
                </p>
                <p className="projectDate">
                    {data.startDate} - {data.endDate}
                </p>
            </div>
            <div className="projectDesc">{data.projectDesc}</div>
            <div className="projectLinks">
                <a href={data.projectLinks.live} className="link">
                    Live
                </a>
                <a href={data.projectLinks.code} className="link">
                    Code
                </a>
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
                projectTitle: '',
                domain: '',
                startDate: '',
                endDate: '',
                projectDesc: '',
                projectLinks: {
                    live: '',
                    code: '',
                },
            },
        ]);
    }
    function updateDataValues(updatedData) {
        updateData((prev) => prev.map((item) => (item.id === updatedData.id ? updatedData : item)));
    }

    function handleRemove(id) {
        updateData((prev) => prev.filter((project) => project.id !== id));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSave('ProjectData', newData);
        onSubmit();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="formControl">
                {newData.map((project) => (
                    <ProjectInfoEdit
                        data={project}
                        key={project.id}
                        onChange={updateDataValues}
                        onRemove={handleRemove}
                    />
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

function ProjectInfoEdit({ data, onChange, onRemove }) {
    function handleEdit(e) {
        const { name, value } = e.target;

        if (name === 'live' || name === 'code') {
            const updated = {
                ...data,
                projectLinks: {
                    ...data.projectLinks,
                    [name]: value,
                },
            };
            onChange(updated);
            return;
        }

        const updated = {
            ...data,
            [name]: value,
        };

        onChange(updated);
    }
    return (
        <div className="ProjectInfoUpdate">
            <Input
                id={`project-title-${data.id}`}
                type="text"
                name="projectTitle"
                value={data.projectTitle}
                onChange={handleEdit}
                label="Project Name"
            />

            <Input
                name="domain"
                id={`project-domain-${data.id}`}
                type="text"
                value={data.domain}
                onChange={handleEdit}
                label="Domain"
            />

            <Input
                name="startDate"
                id={`project-startDate-${data.id}`}
                type="text"
                value={data.startDate}
                onChange={handleEdit}
                label="Start Date"
                pattern="^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$"
                title="Format: May 2023"
            />

            <Input
                name="endDate"
                id={`project-endDate-${data.id}`}
                type="text"
                value={data.endDate}
                onChange={handleEdit}
                label="End Date"
                pattern="^((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}|Present|present)$"
                title="Format: May 2023 | Present"
            />
            <label htmlFor={`projectDesc-${data.id}`}>Description :</label>
            <textarea
                name="projectDesc"
                id={`projectDesc-${data.id}`}
                type="text"
                value={data.projectDesc}
                onChange={handleEdit}
                cols={50}
                rows={10}
                pattern="^.{5,}$"
                title="Enter at least 5 characters"
            ></textarea>
            <div className="ProjectLinks">
                <Input
                    id={`project-link-live-${data.id}`}
                    type="url"
                    value={data.projectLinks.live}
                    onChange={handleEdit}
                    label="Live"
                    title="Enter a valid Live URL"
                    name="live"
                />
                <Input
                    id={`project-link-code-${data.id}`}
                    type="url"
                    value={data.projectLinks.code}
                    onChange={handleEdit}
                    label="Code"
                    title="Enter a valid Code URL"
                    name="code"
                />
            </div>
            <button type="button" onClick={() => onRemove(data.id)} className="btn">
                ❌
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
