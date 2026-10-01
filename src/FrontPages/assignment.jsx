import React from "react";
import "../styles/assignment.css";
import img from '../assets/image.png';



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
function Assignment( {data} ) {
  console.log("data is:",data)

  return (
    <div className="a-container">
      <div className="a-content">
        <div className="a-icon-div">
          {" "}
          <img src={img} alt="f" id="img1" />
        </div>
        <div className="a-asignment-div">
          <div className="a-assignment-title">
            Assignment-<span id="one-two"> {data.assignmentNumber}</span>
          </div>
          <div className="a-course-code-para-div">
            {" "}
            <p id="course-code-para">
              {" "}
              ( CS-<span id="course-code"> {data.courseCode} )</span>{" "}
              <span id="course-name">{data.courseName}</span>
            </p>
          </div>
        </div>
        <div className="a-content-section">
          <div className="a-left-section">
            <div className="a-section-header">Submitted by:</div>

            <div className="a-form-field">
              <span className="a-field-label">Name:</span>
              <p className="a-field-value">{data.name}</p>
            </div>

            <div className="a-form-field">
              <span className="a-field-label">Branch:</span>
              <p className="a-field-value">{data.branch}</p>
            </div>

            <div className="a-form-field">
              <span className="a-field-label">Year/Sem:</span>
             
                   <p id="year-sem" className="a-field-value">
                     {  getYearAndSemValue(data)     }            
                      </p>
            
            </div>

            <div className="a-form-field">
              <span className="a-field-label">Enroll No:</span>
              <p className="a-field-value" id="er-no">
                {data.enrollment}
              </p>
            </div>
          </div>

          <div className="a-right-section">
            <div className="a-section-header">Submitted to:</div>
            <p id="teacher-name" className="a-field-value">
              {data.facultyName}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
