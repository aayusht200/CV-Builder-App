import { useState } from 'react';

export default function GeneralInfo({ data, mode }) {
    const componentUI = mode === 'preview' ? <Preview data={data} /> : <Edit data={data} />;
    return <div className="GeneralInfo">{componentUI}</div>;
}

function Preview({ data }) {
    return (
        <>
            <div className="userName">
                <h1>
                    {data.firstName} {data.lastName}
                </h1>
            </div>
            <div className="ContactDetails">
                <p className="email">{data.email}</p>
                <p className="contactNumber">{data.contactNumber}</p>
            </div>
            <div className="ContactLinks">
                <a href={data.linkedin} className="link">
                    LinkedIn
                </a>
                <a href={data.github} className="link">
                    Github
                </a>
            </div>
            <div className="SummarySection">{data.summary}</div>
        </>
    );
}
function Edit({ data }) {}
