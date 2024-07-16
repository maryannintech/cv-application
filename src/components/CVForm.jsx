import "../css/Fonts.css";
import "../css/CVForm.css";
import React, { useState } from 'react';
import CVPreview from "./CVPreview";

export default function CVForm() {
  const [fullName, setFullName] = useState("");

  function handleFullName() {
    setFullName();
  }

  return (
    <div className="form">
      <div className="general-info">
        <p className="general-title">General Information</p>
        <p className="general-desc">
          General information on a CV serves as a foundation for potential
          employers to contact you.
        </p>
        <label htmlFor="fullname">* Full name</label>
        <input
          type="text"
          id="fullname"
          required
          placeholder="Example: Juan Dela Cruz"
          onChange={handleFullName}
        ></input>
        <label htmlFor="email">* Email</label>
        <input
          type="email"
          id="email"
          required
          placeholder="Example: juandelacruz@gmail.com"
        ></input>
        <label htmlFor="phonenumber">* Phone number</label>
        <input
          type="email"
          id="phonenumber"
          required
          placeholder="Example: +63 2 XXX XXXX"
        ></input>
      </div>
    </div>
  );
}
