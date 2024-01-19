import React from "react";

export default function MyTeam() {
    return <div className="MyTeam">
        <div className="title">
            Current team members
        </div>
        <div className="contentText">
            <ul>
                <li>
                    Khoi Le. PhD student in Epidemiology, University Paris XII. 2023-2026.
                    <br/> Coadvisor: Pr. Emilie Sbidian.
                    <br/> 
                </li>
                <li>
                    Thomas Bettuzzi (mentee). PhD student in Epidemiology, University Paris XII. 2023-2024.
                </li>
                <li>
                    Laetitia Tan-Lhernould (mentee). Biotatistician, Henri Mondor Hospital. 2023-2024.
                </li>
            </ul>
        </div>
        <div className="title">
            Previous students and mentees
        </div>
        <div className="contentText">
            <ul>
                <li>
                    Bang Truong (mentee). PhD student in Epidemiology, Auburn University. 2021-2022
                    <br/> Currently data scientist at AbbVie (USA).
                </li>
                <li>
                    Luong Vuong (mentee). MSc. student in Epidemiology, Antwerp University. 2021-2022
                    <br/> Currently PhD student at KU Leuven (Belgium).
                </li>
            </ul>
        </div>
    </div>;
}
