import "../css/Fonts.css";
import "../css/Nav.css";
import CVPreview from "./CVPreview";
import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav() {
    function redirectToGithubTab(url) {
        window.open(url, '_blank')
    }
    return (
        <div className="nav">
            <i className='bx bx-briefcase' ></i>
            <ul>
                <li><button>Edit my CV</button></li>
                <li><button onClick={() => {redirectToGithubTab("https://github.com/maryannintech")}}><i className='bx bxl-github' ></i></button></li>
            </ul>
        </div>
    )
}