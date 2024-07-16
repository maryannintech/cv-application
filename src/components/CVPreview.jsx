import "../css/Fonts.css";
import "../css/CVPreview.css";

export default function CVPreview({fullname}) {
    return (
        <div className="cv-preview">
            <div className="general-section">
                <h1>{fullname}</h1>
            </div>
        </div>
    )
}