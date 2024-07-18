import "../css/Fonts.css";
import "../css/EducInfo.css";

export default function EducInfo() {
  return (
    <div className="form">
      <form>
        <div className="educinfo">
          <p className="educ-title">Educational Experience</p>
          <p className="educ-desc">
            Educational Experience highlights your academic qualifications and
            demonstrates your knowledge base.
          </p>
          <div className="educ-inputs">
            <label htmlFor="schoolname">* School name</label>
            <input
              type="text"
              id="schoolname"
              required
              placeholder="Example: University of Creative Arts"
            ></input>
            <label htmlFor="degree">* Degree, certificate, or title</label>
            <input
              type="text"
              id="degree"
              required
              placeholder="Example: Bachelor of Science in Information Technology"
            ></input>
            <label htmlFor="startdate">* Start date</label>
            <input
              type="date"
              id="startdate"
              required
              placeholder="Example: 10/31/2023"
            ></input>
            <label htmlFor="enddate">* End date</label>
            <input
              type="date"
              id="enddate"
              required
              placeholder="Example: 10/31/2027"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
