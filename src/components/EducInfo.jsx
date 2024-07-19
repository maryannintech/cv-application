import "../css/Fonts.css";
import "../css/EducInfo.css";

export default function EducInfo({schoolname, finished, startdate, enddate}) {
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
              value={schoolname}
              placeholder="Example: University of Creative Arts"
            ></input>
            <label htmlFor="degree">* Degree, certificate, or title</label>
            <input
              type="text"
              id="degree"
              value={finished}
              required
              placeholder="Example: Bachelor of Science in Information Technology"
            ></input>
            <label htmlFor="startdate">* Start date</label>
            <input
              type="date"
              id="startdate"
              value={startdate}
              required
              placeholder="Example: 10/31/2023"
            ></input>
            <label htmlFor="enddate">* End date</label>
            <input
              type="date"
              id="enddate"
              value={enddate}
              required
              placeholder="Example: 10/31/2027"
            ></input>
            <div className="input-buttons">
              <button className="clearinfo">
                <i className="bx bx-eraser"></i> Clear educational experience
              </button>
              <button className="saveduc">
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
