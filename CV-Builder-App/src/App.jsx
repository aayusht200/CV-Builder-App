import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { data } from './assets/data';
import { useState } from 'react';
import './App.css';
import Sequence from './components/Sequence';
export default function App() {
    const [currentData, setCurrentData] = useState(data);
    function updateCurrentData(section, newData) {
        setCurrentData((prev) => ({
            ...prev,
            [section]: newData,
        }));
    }
    return (
        <div className="app">
            <div className="container">
                <GeneralInfo data={currentData.GeneralInfo} onSave={updateCurrentData} />
                <Education data={currentData.Education} onSave={updateCurrentData} />
                <Experience data={currentData.Experience} onSave={updateCurrentData} />
                <Projects data={currentData.Project} onSave={updateCurrentData} />
                <Skills data={currentData.Skills} onSave={updateCurrentData} />
                <Sequence data={currentData.Sequence} onSave={updateCurrentData} />
            </div>
        </div>
    );
}
