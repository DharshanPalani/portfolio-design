import React from 'react';
import './css/SkillList.css'; // Make sure to import the CSS file for styles

const SkillList = () => {
  return (
    <div className="skill-list">
      <h2>My Skill Sets</h2>
      <div className="skills-container">
        <div className="skill-card">React</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">HTML & CSS</div>
        <div className="skill-card">UI/UX Design</div>
      </div>
    </div>
  );
};

export default SkillList;
