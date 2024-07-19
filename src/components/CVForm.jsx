import "../css/Fonts.css";
import "../css/CVForm.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CVPreview from "./CVPreview";
import GeneralInfo from "./GeneralInfo";
import EducInfo from "./EducInfo";
import PracticalExperience from "./PracticalExperience";

export default function CVForm() {
  // general info states and functions
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

  function clearInfo(inputs) {
    switch (inputs) {
      case "general":
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setAddress("");
        break;
      case "educ":
        setSchoolName("");
        setDegree("");
        setSchoolStartDate("");
        setSchoolEndDate("");
      case "pract":
    }
  }

  // educ info states and functions
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [educationList, setEducationList] = useState([]);

  function handleSchoolName(e) {
    setSchoolName(e.target.value);
  }

  function handleDegree(e) {
    setDegree(e.target.value);
  }

  function handleSchoolStartDate(e) {
    setSchoolStartDate(e.target.value);
  }

  function handleSchoolEndDate(e) {
    setSchoolEndDate(e.target.value);
  }

  function handleSaveButton(e) {
    e.preventDefault();
    const newEducation = {
      id: uuidv4(),
      schoolName,
      degree,
      schoolStartDate,
      schoolEndDate,
    };
    setEducationList([...educationList, newEducation]);
    clearInfo("educ");
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
      <EducInfo
        schoolname={schoolName}
        finished={degree}
        startdate={schoolStartDate}
        enddate={schoolEndDate}
        clearInfo={clearInfo}
        handleSave={handleSaveButton}
        handleSchoolName={handleSchoolName}
        handleDegree={handleDegree}
        handleSchoolStartDate={handleSchoolStartDate}
        handleSchoolEndDate={handleSchoolEndDate}
      ></EducInfo>
      <PracticalExperience></PracticalExperience>
      <CVPreview
        fullname={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        educList={educationList}
      ></CVPreview>
    </div>
  );
}
