import "../css/Fonts.css";
import "../css/PracticalExperience.css";

export default function PracticalExperience({
  companyname,
  position,
  startdate,
  enddate,
  aboutjob,
  handleCompanyName,
  handlePosition,
  handleStartDate,
  handleEndDate,
  handleAboutJob,
  handleSaveButtonPract
}) {
  return (
    <div className="form">
      <form>
        <div className="practical-info">
          <p className="practical-title">Practical Experience</p>
          <p className="practical-desc">
            Practical experience showcases your hands-on skills and abilities
            gained through work, internships, volunteer roles, or other relevant
            activities.
          </p>
          <div className="pract-inputs">
            <label htmlFor="companyname">* Company name</label>
            <input
              type="text"
              id="companyname"
              required
              value={companyname}
              onChange={handleCompanyName}
              placeholder="Example: TechNow Inc."
            ></input>
            <label htmlFor="position">* Position title</label>
            <input
              type="text"
              id="position"
              required
              value={position}
              onChange={handlePosition}
              placeholder="Example: Senior Web Developer"
            ></input>
            <label htmlFor="startdate">* Start date</label>
            <input
              type="date"
              id="startdate"
              required
              value={startdate}
              onChange={handleStartDate}
            ></input>
            <label htmlFor="enddate">* End date</label>
            <input
              type="date"
              id="enddate"
              required
              value={enddate}
              onChange={handleEndDate}
              placeholder="Example: 10/31/2027"
            ></input>
            <label htmlFor="aboutjob">Short description of former job</label>
            <textarea
              id="aboutjob"
              rows="3"
              cols="10"
              value={aboutjob}
              onChange={handleAboutJob}
              placeholder="Example: Designed, developed, and maintained complex websites and applications. Led projects, mentor junior developers, and ensured best practices. "
            ></textarea>
            <div className="input-buttons">
              <button
                className="clearinfo"
                onClick={() => {
                  clearInfo("pract");
                }}
              >
                <i className="bx bx-eraser"></i> Clear practical experience
              </button>
              <button className="savepract" onClick={handleSaveButtonPract}>
                <i className="bx bx-save"></i> Save
              </button>
            </div>
            <button className="addmorepract">
              <i className="bx bxs-file-plus"></i> Add more
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
