import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { data } from './assets/data';
import { useState, useEffect } from 'react';
import './App.css';
import Sequence from './components/Sequence';
export default function App() {
    const [currentData, setCurrentData] = useState(data);
    const [isPrintMode, setPrintMode] = useState(false);
    const currentSequence = Object.keys(currentData.Sequence);

    function updateCurrentData(section, newData) {
        setCurrentData((prev) => ({
            ...prev,
            [section]: newData,
        }));
    }
    function updatePrintState() {
        setPrintMode(true);
    }
    useEffect(() => {
        if (isPrintMode) {
            window.print();
        }
    }, [isPrintMode]);
    useEffect(() => {
        window.onafterprint = () => {
            setPrintMode(false);
        };

        return () => {
            window.onafterprint = null;
        };
    }, []);
    return (
        <div className="app" id="app">
            <button type="button" className="btn" id="printButton" onClick={updatePrintState}>
                Print Resume
            </button>
            <div className="container">
                <RenderApp data={currentData} onSave={updateCurrentData} printMode={isPrintMode} />
                <Sequence data={currentData.Sequence} onSave={updateCurrentData} printMode={isPrintMode} />
            </div>
        </div>
    );
}
function RenderApp({ data, onSave, printMode }) {
    const components = {
        GeneralInfo,
        Education,
        Experience,
        Projects,
        Skills,
    };

    const currentSequence = Object.entries(data.Sequence)
        .sort((a, b) => a[1] - b[1])
        .map(([key]) => key);

    return (
        <>
            {currentSequence.map((item) => {
                const Component = components[item];

                return <Component key={item} data={data[item]} onSave={onSave} printMode={printMode} />;
            })}
        </>
    );
}
