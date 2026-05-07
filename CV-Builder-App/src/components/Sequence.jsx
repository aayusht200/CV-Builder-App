import '../styles/Sequence.css';
import FormControl from './FormControl';
import Input from './Input';
import { useState } from 'react';
export default function Sequence({ data, onSave, printMode }) {
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
    if (printMode) return;
    else {
        return (
            <div className={`SequenceInfo ${viewMode}`}>
                <h1 className="sectionHeader">Sequence</h1>
                {componentUI}
            </div>
        );
    }
}
function Preview({ data, onClick }) {
    return (
        <div className="SequenceInfo">
            <div className="currentSequence">
                {Object.entries(data).map(([key, value]) => (
                    <p key={`currentSequence-${value}`} className="SequenceListItem">
                        {value}.{key}
                    </p>
                ))}
            </div>
            <FormControl onClick={onClick} />
        </div>
    );
}

function Edit({ data, onSubmit, onSave }) {
    const [newData, updateData] = useState(data);
    function handleEdit(e) {
        const { name, value } = e.target;
        updateData((prev) => ({
            ...prev,
            [name]: Number(value),
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        onSave('Sequence', newData);
        onSubmit();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="SequenceInfo">
                <div className="currentSequence">
                    {Object.entries(newData).map(([key, value]) => (
                        <Input
                            key={`currentSequence-${key}`}
                            id={`currentSequence-${key}`}
                            className="SequenceListItem"
                            type="number"
                            value={value}
                            onChange={handleEdit}
                            label={key}
                            min="1"
                            max="5"
                            pattern="^[1-5]$"
                            title="Enter a number between 1-5"
                            name={key}
                        ></Input>
                    ))}
                </div>
                <div className="formControl-btn">
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}
