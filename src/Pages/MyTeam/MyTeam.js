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
                    Marie-Felicia Béclin. Postdoc in Biostatistics, University Paris XII. 2025-2027.
                </li>
                <li>
                    Enrico Roma. Postdoc in Biostatistics, University Paris XII. 2026-2029.
                    <br/> Coadvisor: Dr. Antonio Remiro-Azocar (Novo Nordisk).
                    <br/> 
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

