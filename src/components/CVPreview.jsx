import "../css/Fonts.css";
import "../css/CVPreview.css";

export default function CVPreview({ fullname, email, phoneNumber }) {
  return (
    <div className="cv-preview">
      <div className="general-section">
        <h1>{fullname}</h1>
        <div className="general-infos">
          <p>Phone number: {phoneNumber}</p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
}
