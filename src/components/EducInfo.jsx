import "../css/Fonts.css";
import "../css/EducInfo.css";

export default function EducInfo({
  schoolname,
  finished,
  startdate,
  enddate,
  clearInfo,
  handleSave,
  handleSchoolName,
  handleDegree,
  handleSchoolStartDate,
  handleSchoolEndDate,
  achievements,
  handleAchievements,
}) {
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
              onChange={handleSchoolName}
              placeholder="Example: University of Creative Arts"
            ></input>
            <label htmlFor="degree">* Degree, certificate, or title</label>
            <input
              type="text"
              id="degree"
              value={finished}
              required
              onChange={handleDegree}
              placeholder="Example: Bachelor of Science in Information Technology"
            ></input>
            <label htmlFor="startdate">* Start date</label>
            <input
              type="date"
              id="startdate"
              value={startdate}
              required
              onChange={handleSchoolStartDate}
            ></input>
            <label htmlFor="enddate">* End date</label>
            <input
              type="date"
              id="enddate"
              value={enddate}
              required
              onChange={handleSchoolEndDate}
            ></input>
            <label htmlFor="achievements">Notable achievements</label>
            <textarea
              id="achievements"
              rows="3"
              cols="10"
              value={achievements}
              onChange={handleAchievements}
              placeholder="Example: Recognized for outstanding academic performance and placed on the Dean’s List for four consecutive semesters, Ranked in the top 5% of the graduating class, etc."
            ></textarea>
            <div className="input-buttons">
              <button
                className="clearinfo"
                onClick={() => {
                  clearInfo("educ");
                }}
              >
                <i className="bx bx-eraser"></i> Clear educational experience
              </button>
              <button className="saveduc" onClick={handleSave}>
                <i className="bx bx-save"></i> Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
