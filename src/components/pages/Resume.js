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

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className="container skills-container">
        <h2 className="skills">Front-End Skills</h2>
        <div className="row">
          <img className="logo" src={html5} />
          <img className="logo" src={css3} />
          <img className="logo" src={javascript} />
          <img className="logo" src={jquery} />
          <img className="logo" src={bootstrap} />
        </div>
        <h2 className="skills">Back-End Skills</h2>
        <div className="row">
          <img className="logo" src={mongodb} />
          <img className="logo-medium" src={mongoose} />
          <img className="logo" src={mysql} />
          <img className="logo" src={sequelize} />
          <img className="logo" src={node} />
          <img className="logo-medium" src={reactPic} />
          <img className="logo" src={graphql} />
          <img className="logo-long" src={express}/>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
}
