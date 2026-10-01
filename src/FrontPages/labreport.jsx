import React from "react";
import "../styles/labreport.css";
import logo from  "../assets/lablogo.png"

function getYearAndSemValue(data) {
    const year=Number(data.year);
    const semester=Number(data.semester);

    if (year == 1 && semester == 1) {
      return `${year}st/${semester}1st`;
    } else if (year == 1 && semester == 2) {
      return `${year}st/${semester}nd`;
    } else if (year == 2 && semester == 3) {
      return `${year}nd/${semester}rd`;
    } else if (year == 2 && semester == 4) {
      return `${year}nd/${semester}th`;
    } else if (year == 3 && semester == 5) {
      return `${year}rd/${semester}th`;
    } else if (year == 3 && semester == 6) {
      return `${year}rd/${semester}th`;
    } else if (year == 4 && semester == 7) {
      return `${year}th/${semester}th`;
    } else if (year == 4 && semester == 8) {
      return `${year}th/${semester}th`;
    } else {
      return "";
    }
  }
    {/*ise value update krdnge jo return hui thi */}

function Labreport({ data }) {
  return (
    <div className="lab-container">
      <div className="lab-header">
        <div className="lab-uni-logo-img-div">
          {" "}
          <img id="lab-uni-logo-img" src={logo} alt="lab logo photo" />
        </div>

        <div
          className="text-[22px] font-bold text-black mb-[10px] tracking-[0.6px] leading-[12px] w-[651px]  ml-6
          border-b-2 border-black pb-5"
        >
          <p id="dept-para"> DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING</p>
        </div>
      </div>

      <div className="lab-title">LAB REPORT</div>
      <div className="lab-year">{data.acedamicYear || "2024-2025"}</div>

      <div className="lab-course-info">
        <div className="lab-course-name">{data.courseName}</div>
        <div className="lab-course-code">(CS-{data.courseCode})</div>
      </div>

      <div className="flex flex-row justify-between mt-[95px] ml-[20px] gap-[15px] w-[694]">
        <div className="lab-left-section">
          <div className="lab-section-title">SUBMITTED BY :</div>
          <div className="lab-info-row">
            <span className="lab-label">NAME:</span>
            <span className="lab-value" style={{ marginLeft: "55px" }}>
              {" "}
              {data.name}
            </span>
          </div>
          <div className="lab-info-row">
            <span className="lab-label">BRANCH:</span>
            <span className="lab-value" style={{ marginLeft: "55px" }}>
              {data.branch}
            </span>
          </div>
          <div className="lab-info-row">
            <span className="lab-label">YEAR/SEM:</span>
            <span className="lab-value" style={{ marginLeft: "55px" }}>
             {getYearAndSemValue(data)}
            </span>
          </div>
          <div className="lab-info-row">
            <span className="lab-label">ENROLLMENT NO:</span>
            <span className="lab-value">{data.enrollment} </span>
          </div>
          <div className="lab-info-row">
            <span className="lab-label">GROUP:</span>
            <span className="lab-value" style={{ marginLeft: "55px" }}>
              {data.group}
            </span>
          </div>
        </div>

        <div className="lab-right-section">
          <div className="lab-section-title">SUBMITTED TO :</div>
          <div className="lab-info-row">
            <span className="lab-label" id="professor-name">
              {data.AssitantProfessorName}
            </span>
          </div>
          <div className="lab-info-row">
            <span
              className="lab-label"
              id="professor-v"
              style={{ fontWeight: 100 }}
            >
              (ASSISTANT PROFESSOR)
            </span>
          </div>
          <div className="lab-info-row">
            <span className="lab-label " id="lab-instructor-name">
              {data.labInstrutorName}
            </span>
          </div>
          <div className="lab-info-row">
            {/* if lab instructor types is senior or none. */}

            <span
              className="lab-label"
              id="lab-instructor-v"
              style={{ fontWeight: 100 }}
            >
              ({data.labInstructorType})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Labreport;
