import { useState } from "react";
import "../styles/UploadCV.css";

export default function UploadCV() {
  const [cvFile, setCvFile] = useState(null);

  // Handle file selection
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
  };

  // Handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setCvFile(file);
  };

  const preventDefaults = (e) => e.preventDefault();

  return (
    <section id="upload-cv" className="container fade-in" style={{ marginTop: "60px" }}>
      <h2>Upload Your CV</h2>

      <div
        onDrop={handleDrop}
        onDragOver={preventDefaults}
        onDragEnter={preventDefaults}
        onDragLeave={preventDefaults}
        className="drop-zone"
        style={{
          border: "2px dashed #6c63ff",
          padding: "40px",
          borderRadius: "12px",
          textAlign: "center",
          cursor: "pointer",
          background: "#f5f5ff",
        }}
      >
        <p>Drag & Drop your CV here</p>
        <p>OR</p>
        <label
          htmlFor="cv-input"
          style={{
            background: "#6c63ff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Choose File
        </label>
        <input
          id="cv-input"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
      </div>

      {cvFile && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h4>Uploaded File:</h4>
          <p>{cvFile.name}</p>

          <a
            href={URL.createObjectURL(cvFile)}
            download={cvFile.name}
            style={{
              textDecoration: "none",
              background: "#28a745",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            Download CV
          </a>
        </div>
      )}
    </section>
  );
}
