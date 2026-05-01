import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
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
        <>
            <GeneralInfo data={currentData.GeneralInfoData} onSave={updateCurrentData} />
            <Education data={currentData.EducationData} onSave={updateCurrentData} />
        </>
    );
}
