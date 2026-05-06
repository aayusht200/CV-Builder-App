import '../styles/Sequence.css';
import { useState } from 'react';
export default function Sequence({ data, onSave }) {
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
        <div className={`SequenceInfo ${viewMode}`}>
            <h1 className="sectionHeader">Sequence</h1>
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
