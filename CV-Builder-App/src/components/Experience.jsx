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
                <ul>
                    {data.responsibilities.map((responsibility) => (
                        <li key={responsibility.id}>{responsibility.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
