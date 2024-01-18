import React from "react";

export default function MyTeam() {
    return <div className="MyTeam">
        <div className="title">
            Current team members
        </div>
        <div className="contentText">
            <ul>
                <li>
                    Khoi Le. PhD student in Epidemiology, University Paris XII. 2023-2026
                    Topic: Efficacy and safety of biologic treatments in psoriasis: causal inference
                    from observational data. Coadvisor: Emilie Sbidian.
                </li>
                <li>
                    Thomas Bettuzzi (mentee). PhD student in Epidemiology, University Paris XII. 2023-2024
                    Topic: Integrating aggregated data in random-effect meta-analysis of individual-level data.
                </li>
                <li>
                    Laetitia Tan-Lhernould (mentee). Biotatistician. Henri Mondor Hospital. 2023-2024
                    Topic: Novel methods for indirect treatment comparisons in health technology assessment.
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
                    Topic: A systematic review of population adusted-indirect comparisons in
                    health technology assessment.
                </li>
                <li>
                    Luong Vuong (mentee). MSc. student in Epidemiology, Antwerp University. 2021-2022
                    Topic: Methods for developing minimum reporting sets of patient characteristics
                    in epidemiological research.
                </li>
            </ul>
        </div>
    </div>;
}
