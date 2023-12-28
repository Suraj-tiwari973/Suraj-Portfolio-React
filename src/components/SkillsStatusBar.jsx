import React from "react";
import "../styles/SkillsStatusBar.css";

const SkillStatusBar = ({ skill, proficiency }) => {
  return (
    <div className="skill-status-bar">
      <div className="skill-name">{skill}</div>
      <div className="status-bar">
        <div className="progress" style={{ width: `${proficiency}%` }}></div>
      </div>
      <div className="proficiency">{proficiency}% Proficient</div>
    </div>
  );
};

export default SkillStatusBar;
