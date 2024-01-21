import React from "react";
import "./Profile.css";

//icons
import { FaLocationDot, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";
import { FaDownload } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";

export default function Profile() {
    return <div className="Profile">
        <img src="/profile.jpg" alt="Profile" />
        <div className="name">
            Tat-Thang Vo
        </div>
        <div className="description">
            PharmD, PhD <br/>
            Professor (Junior) in Biostatistics <br/>
            Faculty of Medicine, University Paris XII, France.
        </div>
        <div className="contactLinks">
            <div className="location">
                <FaLocationDot />
                Paris, France
            </div>
            <div className="email">
                <MdEmail />
                <a href="mailto:tat-thang.vo@u-pec.fr">tat-thang.vo@u-pec.fr</a>
            </div>
            <div className="linkedin">
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/tat-thang-vo-281453113/">Linkedin</a>
            </div>
            <div className="twitter">
                <FaTwitter />
                <a href="https://twitter.com/TatThangVo1">Twitter</a>
            </div>
            <div className="github">
                <FaGithub />
                <a href="https://github.com/votatthang">Github</a>
            </div>
            <div className="googleScholar">
                <SiGooglescholar />
                <a href="https://scholar.google.com/citations?hl=fr&user=VMFhSVcAAAAJ">Google Scholar</a>
            </div>
            <div className="resume">
                <FaDownload />
                <a href="/resume.pdf">My CV</a>
            </div>
        <br/> <br/> 
        <div className="name">
            Tat-Thang Vo
        </div>
            <div className="news">
                <FaNewspaper/>
                I am looking for new master and postdoctoral students. 
                Please free to reach out via <a href="mailto:tat-thang.vo@u-pec.fr">email.</a>
            </div>
        </div>
    </div>;
}
