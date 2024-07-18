import "../css/Fonts.css";
import "../css/CVPreview.css";

export default function CVPreview({ fullname, email, phoneNumber, address }) {
  return (
    <div className="cv-preview">
      <div className="general-section">
        <h1>{fullname}</h1>
        <div className="general-infos">
          <p>
            <i className="bx bxs-phone"></i> {phoneNumber}
          </p>
          <p>
            <i className="bx bxs-envelope"></i> {email}
          </p>
          <p>
            <i className="bx bxs-map-pin"></i> {address}
          </p>
        </div>
      </div>
      <div className="educ-section">
        <p className="title-section">EDUCATION</p>
        <div className="educ-infos">
          <p>Name of School: </p>
          <p>Date: </p>
          <p>Degree, certificate, or title: </p>
        </div>
      </div>
    </div>
  );
}
