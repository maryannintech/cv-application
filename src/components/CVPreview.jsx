import "../css/Fonts.css";
import "../css/CVPreview.css";

export default function CVPreview({
  fullname,
  email,
  phoneNumber,
  address,
  educList,
  practList,
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
            <p className="degree">{edu.degree}</p>
            <p className="schoolname">{edu.schoolName} </p>
            <p>
              {edu.schoolStartDate} to {edu.schoolEndDate}
            </p>
            <p><i className='bx bxs-chevron-right'></i> {edu.achievements}</p>
          </div>
        ))}
      </div>
      <div className="pract-section">
        <p className="title-section">JOB/PRACTICAL EXPERIENCE</p>
        {practList.map((pract) => (
          <div key={pract.id} className="pract-infos">
            <p className="position">{pract.position} </p>
            <p className="companyname">{pract.companyName} </p>
            <p>
              {pract.jobStartDate} to {pract.jobEndDate}{" "}
            </p>
            <p><i className='bx bxs-chevron-right'></i> {pract.aboutJob}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
