import "../css/Fonts.css";
import "../css/CVForm.css";
import React, { useState } from "react";
import CVPreview from "./CVPreview";
import GeneralInfo from "./GeneralInfo";

export default function CVForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleFullName() {
    setFullName(e.target.value);
  }

  function handleEmail() {
    setEmail(e.target.value);
  }

  function handlePhoneNumber() {
    setPhoneNumber(e.target.value);
  }

  function clearInfo() {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
  }
  return (
    <div>
      <GeneralInfo
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        handleFullName={handleFullName}
        handleEmail={handleEmail}
        handlePhoneNumber={handlePhoneNumber}
        clearInfo={clearInfo}
      ></GeneralInfo>
      <CVPreview
        fullname={fullName}
        email={email}
        phoneNumber={phoneNumber}
      ></CVPreview>
    </div>
  );
}
