import "../css/Fonts.css";
import "../css/CVForm.css";
import React, { useState } from "react";
import CVPreview from "./CVPreview";
import GeneralInfo from "./GeneralInfo";
import EducInfo from "./EducInfo";
import PracticalExperience from "./PracticalExperience";

export default function CVForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  function handleFullName(e) {
    setFullName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }

  function handleAddress(e) {
    setAddress(e.target.value);
  }

  function clearInfo() {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  }

  return (
    <div>
      <GeneralInfo
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        handleAddress={handleAddress}
        handleFullName={handleFullName}
        handleEmail={handleEmail}
        handlePhoneNumber={handlePhoneNumber}
        clearInfo={clearInfo}
      ></GeneralInfo>
      <EducInfo></EducInfo>
      <PracticalExperience></PracticalExperience>
      <CVPreview
        fullname={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      ></CVPreview>
    </div>
  );
}
