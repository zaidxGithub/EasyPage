import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  FileText,
  BookOpen,
  User,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";



const sections = {
  1: [
    {
      title: "Course",
      hint: "What the assignment is for",
      fields: ["assignmentNumber", "courseCode", "courseName"],
    },
    {
      title: "Student",
      hint: "Your details",
      fields: ["name", "enrollment", "branch", "year", "semester"],
    },
    {
      title: "Faculty",
      hint: "Who it is submitted to",
      fields: ["facultyName"],
    },
  ],

  2: [
    {
      title: "Course",
      hint: "What the lab is for",
      fields: ["acedamicYear", "courseCode", "courseName"],
    },
    {
      title: "Student",
      hint: "Your details",
      fields: ["name", "enrollment", "branch", "year", "semester", "group"],
    },
    {
      title: "Faculty",
      hint: "Who it is submitted to",
      fields: [
        "AssitantProfessorName",
        "labInstructorType",
        "labInstrutorName",
      ],
    },
  ],
};

const templateFields = Object.fromEntries(
  Object.entries(sections).map(([key, list]) => [
    key,
    list.flatMap((s) => s.fields),
  ]),
);

const fieldLabels = {
  assignmentNumber: "Assignment number",
  courseCode: "Course code",
  courseName: "Subject name",
  name: "Student name",
  branch: "Branch",
  acedamicYear: "Academic year",
  semester: "Semester",
  enrollment: "Enrollment number",
  facultyName: "Faculty name",
  group: "Group",
  AssitantProfessorName: "Assistant professor name",
  labInstrutorName: "Lab instructor name",
  year: "Year",
  labInstructorType: "Lab instructor type",
};

const placeholders = {
  assignmentNumber: "1 or 2",
  courseCode: "e.g. CS301",
  courseName: "e.g. Data Structures",
  name: "Full name",
  branch: "e.g. Computer Science",
  acedamicYear: "e.g. 2025-26",
  semester: "e.g. 5",
  enrollment: "e.g. 2301234567",
  facultyName: "Full name",
  group: "e.g. A1",
  AssitantProfessorName: "Full name",
  labInstrutorName: "Full name",
  year: "e.g. 3",
};

const templates = [
  {
    id: "1",
    label: "Assignment",
    note: "Cover page for written work",
    icon: FileText,
  },
  {
    id: "2",
    label: "Lab Report",
    note: "Includes group and lab instructor",
    icon: BookOpen,
  },
];

function Form({ onSubmit }) {
  const [template, setTemplate] = useState("1");
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const getMissingFields = (data, tpl) =>
    templateFields[tpl].filter(
      (field) => !data[field] || data[field].trim() === "",
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    const missing = getMissingFields(formData, template);

    if (missing.length > 0) {
      setErrors(Object.fromEntries(missing.map((field) => [field, true])));

      toast.error(
        `Complete ${missing.length} required ${
          missing.length === 1 ? "field" : "fields"
        } to continue.`,
      );

      return;
    }

    onSubmit({
      ...formData,
      template,
    });
  };



  const handleTemplateChange = (id) => {
    if (id === template) return;

    setTemplate(id);
    setFormData({});
    setErrors({});
  };



  const renderField = (field) => {
    const hasError = errors[field];
    const id = `field-${field}`;

    return (
      <div
        key={field}
        className={`group form-field ${
          field === "courseName" ? "form-field--wide" : ""
        }`}
      >

        <label
          htmlFor={id}
          className="form-field-label"
        >
          {fieldLabels[field]}
        </label>


        <div className="relative">
          {field === "labInstructorType" ? (
            <select
              id={id}
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              aria-invalid={hasError ? "true" : undefined}
              className={`form-control form-control--select ${
                hasError ? "form-control--error" : "form-control--ready"
              }`}
            >
              <option value="">Select type</option>

              <option value="SR. LAB INSTRUCTOR">Sr. Lab Instructor</option>

              <option value="JR. LAB INSTRUCTOR">Jr. Lab Instructor</option>

              <option value="LAB INSTRUCTOR">Lab Instructor</option>
            </select>
          ) : (
            <input
              id={id}
              name={field}
              value={formData[field] || ""}
              onChange={handleChange}
              placeholder={placeholders[field]}
              autoComplete="off"
              aria-invalid={hasError ? "true" : undefined}
              className={`form-control form-control--input ${
                hasError ? "form-control--error" : "form-control--ready"
              }`}
            />
          )}

          {formData[field] && !hasError && (
            <CheckCircle2
              className="form-field-success"
            />
          )}
        </div>

        {hasError && (
          <p
            className="form-field-error"
          >
            <AlertCircle className="form-field-error-icon" />
            {fieldLabels[field]} is required.
          </p>
        )}
      </div>
    );
  };

  return (
    <div
      className="form-page"
    >
      <div className="form-background" aria-hidden="true">
        <div
          className="form-background-orb form-background-orb--upper-left"
        />

        <div
          className="form-background-orb form-background-orb--upper-right"
        />

        <div
          className="form-background-orb form-background-orb--lower"
        />

        <div
          className="form-background-orb form-background-orb--center"
        />
      </div>

      <div className="form-container">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="form-shell"
        >

          {/* Template selection */}
          <div
            className="template-panel"
          >
            <div className="template-panel-heading">
              <div>
                <div className="template-title-row">
                  <span className="template-title-icon">
                    <FileText className="h-4 w-4" />
                  </span>

                  <p className="text-sm font-bold text-slate-900">
                    Choose a template
                  </p>
                </div>

                <p className="template-instructions">
                  Select the type of cover page you want to create.
                </p>
              </div>

              <span
                className="template-step"
              >
                Step 1
              </span>
            </div>

            <div
              role="radiogroup"
              aria-label="Template"
              className="template-grid"
            >
              {templates.map((t) => {
                const active = template === t.id;
                const Icon = t.icon;

                return (
                  <button
                    key={t.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => handleTemplateChange(t.id)}
                    className={`template-option ${
                      active
                        ? "template-option--active"
                        : "template-option--idle"
                    }`}
                  >
                    {active && (
                      <div
                        className="template-option-glow"
                      />
                    )}

                    <div className="template-option-content">
                      <span
                        className={`template-option-icon ${
                          active
                            ? "template-option-icon--active"
                            : "template-option-icon--idle"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="template-option-copy">
                        <span
                          className={`template-option-title ${
                            active
                              ? "template-option-title--active"
                              : "template-option-title--idle"
                          }`}
                        >
                          {t.label}
                        </span>

                        <span className="template-option-note">
                          {t.note}
                        </span>
                      </span>

                      {active && (
                        <CheckCircle2
                          className="template-option-check"
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form sections */}
          {sections[template].map((section, index) => (
            <section
              key={section.title}
              className="form-section"
            >
              <div className="form-section-layout">
                <div>
                  <div className="form-section-title-row">
                    <span className="form-section-icon">
                      {index === 0 && <BookOpen className="h-4 w-4" />}

                      {index === 1 && <User className="h-4 w-4" />}

                      {index === 2 && <GraduationCap className="h-4 w-4" />}
                    </span>

                    <h2 className="text-sm font-bold text-slate-900">
                      {section.title}
                    </h2>
                  </div>

                  <p className="form-section-hint">
                    {section.hint}
                  </p>
                </div>

                <div className="form-fields-grid">
                  {section.fields.map(renderField)}
                </div>
              </div>
            </section>
          ))}

          {/* Submission actions */}
          <div
            className="form-footer"
          >
            <div className="form-footer-content">
              <div className="form-footer-info">
                <span className="form-footer-icon">
                  <Sparkles className="h-4 w-4" />
                </span>

                <div>
                  <p className="form-footer-title">
                    Ready to generate?
                  </p>

                  <p className="form-footer-note">
                    All fields are required. Your PDF will be generated
                    instantly.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="form-submit-button"
              >
                Generate PDF
                <ArrowRight
                    className="form-submit-icon"
                />
              </button>
            </div>
          </div>
        </form>

        {/* Privacy note */}
        <div
          className="form-privacy-note"
        >
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />

          <span>
            Your information is used only to generate your cover page.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Form;
