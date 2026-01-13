import React from "react";
import "./AboutMe.css";
import { BsAirplane } from "react-icons/bs";
import { HiOutlineMicrophone } from "react-icons/hi";

export default function AboutMe() {
    return <div className="AboutMe">
        <div className="shortDescription">
            I am a biostatistician with research interests in developing and applying causal inference methods to understand the benefits and risks of medical interventions on human’s health. 
            Previously, I received a BSc. (Hons) in Mathematics at The Open University (UK), a Master in Comparative Effectiveness Research at University Paris Cité (France) and a Pharm.D. at Hanoi University of Pharmacy (Vietnam).<br/> <br/> 
            In 2020, I completed a PhD in Biostatistics jointly from Ghent University (Belgium) and University Paris Cité (France), under the supervision of Pr. <a href="https://www.ugent.be/dass/en/research/vansteelandt"> Stijn Vansteelandt</a> and 
            Pr. <a href="https://cress-umr1153.fr/fr/teams/methods/member-raphael-porcher-254/"> Raphael Porcher</a>. My PhD research was funded by the European Union H2020 program. 
            I then received a three-year postdoctoral training by Pr. <a href="https://statistics.wharton.upenn.edu/profile/dsmall/#overview"> Dylan S. Small</a> and Pr. <a href="https://www.med.upenn.edu/apps/faculty/index.php/g275/p8396"> Sean Hennessy</a> at
            Wharton Department of Statistics and Data Science, University of Pennsylvania (USA). 
            <br/> <br/> Recently, I have joined the research group <a href="https://team-epiderme.com/"> EPIDERME</a> at University Paris XII (France) as a Junior Professor in Biostatistics.
        </div>
        <div className="title">
            Research Interests
        </div>
        <div className="contentText">
            My current works primarily concern the development of novel approaches for data fusion, mediation analysis,  
            meta-analysis and heterogeneity assessment. More recently, I have been working on methods to address unmeasured confounders, 
            policy learning and indirect treatment comparisons. One important feature of my research is the application of 
            semi-parametric theory to develop flexible, data-adaptive estimation strategies for causal parameters. 
            I am also interested in the applications of causal methods to clinical questions in medicine, 
            psychology and pharmacoepidemiology.
        </div>
        <div className="title">
            Honors and Awards
        </div>
        <div className="contentText">
            <ul>
                <li>
                    New Faculty Travel Grant Award, Institute of Mathematical Statistics – Aug 2022.
                </li>
                <li>
                    Junior Researcher Travel Grant, US National Science Foundation – May 2022.
                </li>
                <li>
                    Third Prize, TEDxGhent Research Rally – Nov 2019.
                </li>
                <li>
                    Norman Breslow Award, Section on Statistics in Epidemiology, American Statistical Association – Aug 2019.
                </li>
                <li>
                    Student Conference Award, International Society of Clinical Biostatistics – Aug 2018.
                </li>
                <li>
                    Marie Sklodowska-Curie Actions funding, project MiRoR – 2016-2019.
                </li>
                <li>
                    Ile-de-France International Master Scholarship – 2014-2016.
                </li>
                <li>
                    Eiffel Excellence Scholarship from French Ministry of Europe and Foreign – 2015-2016.
                </li>
                <li>
                    Agence Universitaire de la Francophonie Master Scholarship – 2014-2015.
                </li>
                <li>
                    Valedictorian. Class of 2014, Hanoi University of Pharmacy – June 2014.
                </li>
            </ul>
        </div>
        <div className="title">
            Hobby
        </div>
        <div className="hobbyLogo">
            <div className="reading">
                <img src="https://img.icons8.com/ios/50/000000/reading.png" alt="reading" />
                <p>Reading</p>
            </div>
            <div className="badminton">
                <img src="https://img.icons8.com/ios/50/000000/badminton.png" alt="badminton" />
                <p>Badminton</p>
            </div>
            <div className="singing">
                <HiOutlineMicrophone size={50} color="black" />
                <p>Singing</p>
            </div>
            <div className="traveling">
                <BsAirplane size={50} color="black"/>
                <p>Traveling</p>
            </div>
            <div className="math">
                <img src="https://img.icons8.com/ios/50/000000/math.png" alt="math" />
                <p>Self-learning math</p>
            </div>
        </div>

    </div>;
}

