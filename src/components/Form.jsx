import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

import { toast } from "react-toastify";

function Form({ onSubmit }) {
  const [template, setTemplate] = useState("1");
  const [formData, setFormData] = useState({});

  const templateFields = {
    1: [
      "assignmentNumber","courseCode","courseName",
      "name",
      "branch",
      "year",
      "semester",
      "enrollment",
      "facultyName",
    ],
    2: [
      "acedamicYear",
      "courseCode",
      "courseName",
      "name",
      "branch",
      "year",
      "semester",
      "enrollment",
      "group",
      "AssitantProfessorName",
      "labInstructorType",
      "labInstrutorName",
    ],
  };
  const fieldLabels = {
    assignmentNumber: "Assignment 1 or 2",
    courseCode: "COURSE CODE",
    courseName: "COURSE NAME",
    name: "STUDENT NAME",
    branch: "BRANCH",
    acedamicYear: "ACADEMIC YEAR",
    semester: "SEMESTER",
    enrollment: "ENROLLMENT NO",
    facultyName: "FACULTY NAME",
    group: "GROUP",
    AssitantProfessorName: "ASSISTANT PROFESSOR NAME",
    labInstrutorName: "LAB INSTRUCTOR NAME",
    year: "Year ",
    labInstructorType: " Lab Instructor Type",
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid = (FormData, template) => {
    const reqFields = templateFields[template];

    for (const field of reqFields) {
      if (!FormData[field] || FormData[field].trim() === "") {
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid(formData, template)) {
      toast.error("fill the details first:");
      return;
    } else {
      onSubmit({ ...formData, template });
    }
  };

  const handleTemplateChange = (e) => {
    const selectedTemplate = e.target.value;
    setTemplate(selectedTemplate);
    setFormData({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 sm:py-12 py-8 px-4  mt-0   ">
      <div className=" max-w-5xl mx-auto  ">
        <div className="bg-white rounded-2xl shadow-xl p-4 border-2 border-blue-200 ">
          <div className="mb-6 ">
            <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Select Template
            </label>
            <select
              name="template"
              onChange={handleTemplateChange}
              value={template}
              className="w-full  mx-auto sm:w-[94%] block p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-700 font-medium bg-gray-50 hover:bg-white outline-none"
            >
              <option value="1">📝 Assignment</option>
              <option value="2">🔬 Lab Report</option>
            </select>
          </div>

          <div className="space-y-4  sm:flex sm:flex-wrap sm:space-y-1 sm:space-x-5 sm:ml-9">
            {templateFields[template].map((field, index) =>
              field === "labInstructorType" ? (
                <div key={field} className="mb-4  sm:mt-3">
                  <label className="block font-semibold mb-2">
                    {fieldLabels[field]}
                  </label>
                  <select
                    name="labInstructorType"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-400 bg-gray-50 hover:bg-white group-hover:border-gray-300 outline-none"
                    value={formData.labInstructorType || ""}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Instructor Type</option>
                    <option value="SR. LAB INSTRUCTOR">
                      JR. LAB INSTRUCTOR
                    </option>
                    <option value="JR. LAB INSTRUCTOR">
                      SR. LAB INSTRUCTOR
                    </option>
                    <option value="LAB INSTRUCTOR">LAB INSTRUCTOR</option>
                  </select>
                </div>
              ) : (
                <div key={field} className="group sm:mt-3">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    {fieldLabels[field]}
                  </label>
                  <input
                    name={field}
                    placeholder={`Enter ${fieldLabels[field].toLowerCase()}`}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    className="sm:w-112 w-full p-3 border-2 border-gray-200 rounded-xl roun focus:ring-4 focus:ring-blue-100 sm:mt-1 focus:border-blue-500 transition-all duration-200 text-gray-700 placeholder-gray-400 bg-gray-50 hover:bg-white group-hover:border-gray-300 outline-none"
                  />
                </div>
              )
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mx-auto sm:w-[80%] block mt-7 sm:mt-10 sm:mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 
             rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Generate Your PDF
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            Your Page will be generated instantly
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
