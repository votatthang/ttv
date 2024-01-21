import React, { useState } from "react";

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactMe = () => {
    

    return (
        <div className="Publications">
         <div className="title">
            2023
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
        </div>

    );
};

export default ContactMe;
