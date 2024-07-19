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
  // educ info states and functions
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [achievements, setAchievements] = useState("");
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

  function handleAchievements(e) {
    setAchievements(e.target.value);
  }

  function handleSaveButtonEduc(e) {
    e.preventDefault();
    const newEducation = {
      id: uuidv4(),
      schoolName,
      degree,
      schoolStartDate,
      schoolEndDate,
      achievements,
    };
    setEducationList([...educationList, newEducation]);
    clearInfo("educ");
  }

  // practical info states and functions
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [aboutJob, setAboutJob] = useState("");
  const [practicalList, setPracticalList] = useState([]);

  function handleCompanyName(e) {
    setCompanyName(e.target.value);
  }

  function handlePosition(e) {
    setPosition(e.target.value);
  }

  function handleJobStartDate(e) {
    setJobStartDate(e.target.value);
  }

  function handleJobEndDate(e) {
    setJobEndDate(e.target.value);
  }

  function handleAboutJob(e) {
    setAboutJob(e.target.value);
  }

  function handleSaveButtonPract(e) {
    e.preventDefault();
    const newPractical = {
      id: uuidv4(),
      companyName,
      position,
      jobStartDate,
      jobEndDate,
      aboutJob,
    };
    setPracticalList([...practicalList, newPractical]);
    clearInfo("pract");
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
        setAchievements("");
        break;
      case "pract":
        setCompanyName("");
        setPosition("");
        setJobStartDate("");
        setJobEndDate("");
        setAboutJob("");
        break;
    }
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
        handleSave={handleSaveButtonEduc}
        handleSchoolName={handleSchoolName}
        handleDegree={handleDegree}
        handleSchoolStartDate={handleSchoolStartDate}
        handleSchoolEndDate={handleSchoolEndDate}
        achievements={achievements}
        handleAchievements={handleAchievements}
      ></EducInfo>
      <PracticalExperience
        companyname={companyName}
        position={position}
        startdate={jobStartDate}
        enddate={jobEndDate}
        aboutjob={aboutJob}
        handleCompanyName={handleCompanyName}
        handlePosition={handlePosition}
        handleAboutJob={handleAboutJob}
        handleStartDate={handleJobStartDate}
        handleEndDate={handleJobEndDate}
        handleSaveButtonPract={handleSaveButtonPract}
      ></PracticalExperience>
      <CVPreview
        fullname={fullName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        educList={educationList}
        practList={practicalList}
      ></CVPreview>
      <button></button>
    </div>
  );
}
