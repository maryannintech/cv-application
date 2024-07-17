import "../css/Fonts.css";
import "../css/CVPreview.css";

export default function CVPreview({ fullname, email, phoneNumber }) {
  return (
    <div className="cv-preview">
      <div className="general-section">
        <h1>FULL NAME {fullname}</h1>
        <div className="general-infos">
          <p>PHONE NUMBER {phoneNumber}</p>
          <p>|</p>
          <p>EMAIL {email}</p>
        </div>
      </div>
    </div>
  );
}
