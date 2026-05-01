import GeneralInfo from './components/GeneralInfo';
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

    return <GeneralInfo data={currentData.GeneralInfoData} onSave={updateCurrentData} />;
}
