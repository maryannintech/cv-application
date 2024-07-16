import "../css/Fonts.css";
import "../css/Nav.css";
import "../css/CVForm.css";
import CVPreview from "./CVPreview";
import React, { useState } from 'react';


export default function Nav() {
    function showCVForm() {

    }
    function redirectToGithubTab(url) {
        window.open(url, '_blank')
    }
    return (
        <div className="nav">
            <i className='bx bx-briefcase' ></i>
            <ul>
                <li><button onClick={showCVForm}>Edit my CV</button></li>
                <li><button onClick={() => {redirectToGithubTab("https://github.com/maryannintech")}}><i className='bx bxl-github' ></i></button></li>
            </ul>
        </div>
    )
}