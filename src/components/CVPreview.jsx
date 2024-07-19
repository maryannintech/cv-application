import "../css/Fonts.css";
import "../css/CVPreview.css";

export default function CVPreview({
  fullname,
  email,
  phoneNumber,
  address,
  educList
}) {
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
        {educList.map((edu) => (
          <div key={edu.id} className="educ-infos">
            <p>{edu.schoolName} </p>
            <p>
              {edu.schoolStartDate} to {edu.schoolEndDate}
            </p>
            <p>{edu.degree}</p>
          </div>
        ))}
      </div>
      <div className="pract-section">
        <p className="title-section">JOB/PRACTICAL EXPERIENCE</p>
        <div className="pract-infos">
          <p>Name of Company: </p>
          <p>Date: </p>
          <p>Position title: </p>
          <p>Job description: </p>
        </div>
      </div>
    </div>
  );
}
