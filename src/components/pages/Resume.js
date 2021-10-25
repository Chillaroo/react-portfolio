import React from 'react';
import html5 from '../../assets/html5.png';
import css3 from '../../assets/css3.png';
import bootstrap from '../../assets/bootstrap-logo.png';
import graphql from '../../assets/graphql.png';
import javascript from '../../assets/javascript.png';
import jquery from '../../assets/jquery.png';
import mongodb from '../../assets/mongodb.png';
import mongoose from '../../assets/mongoose.png';
import mysql from '../../assets/mysql.png';
import node from '../../assets/node.png';
import reactPic from '../../assets/react.png';
import sequelize from '../../assets/sequelize.png';
import express from '../../assets/express.png'
import resume from '../../assets/resume.pdf'

export default function Resume() {
  return (
    <div>
      <a className="resume" href={resume} download="Rachel Chin Resume" target="blank">
        <h1>Resume Download</h1>
      </a>
      <div className="container skills-container">
        <h2 className="skills">Front-End Skills</h2>
        <div className="row justify-content-center">
          <img className="logo" src={html5} alt="HTML5" />
          <img className="logo" src={css3} alt="CSS3"/>
          <img className="logo" src={javascript} alt="JavaScript"/>
          <img className="logo" src={jquery} alt="JQuery"/>
          <img className="logo" src={bootstrap} alt="Bootstrap"/>
        </div>
        <h2 className="skills">Back-End Skills</h2>
        <div className="row justify-content-center">
          <img className="logo" src={mongodb} alt="MongoDB"/>
          <img className="logo-medium" src={mongoose} alt="Mongoose"/>
          <img className="logo" src={mysql} alt="mySQL"/>
          <img className="logo" src={sequelize} alt="Sequelize"/>
          <img className="logo" src={node} alt="node.js"/>
          <img className="logo-medium" src={reactPic} alt="React"/>
          <img className="logo" src={graphql} alt="GraphQL"/>
          <img className="logo-long" src={express} alt="Express"/>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
}
