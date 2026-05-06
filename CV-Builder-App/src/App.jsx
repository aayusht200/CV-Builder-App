import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { data } from './assets/data';
import { useState } from 'react';
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
                <GeneralInfo data={currentData.GeneralInfoData} onSave={updateCurrentData} />
                <Education data={currentData.EducationData} onSave={updateCurrentData} />
                <Experience data={currentData.ExperienceData} onSave={updateCurrentData} />
                <Projects data={currentData.ProjectData} onSave={updateCurrentData} />
                <Skills data={currentData.SkillsData} onSave={updateCurrentData} />
            </div>
        </div>
    );
}
