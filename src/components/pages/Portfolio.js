import React from 'react';
import sustainableReviews from '../../assets/sustainable-reviews.png';
import weatherPlanner from '../../assets/weather-dashboard.png';
import techBlog from '../../assets/tech-blog.png';
import jsQuiz from '../../assets/javascript-quiz.png';
import teamProfileGenerator from '../../assets/team-profile-generator.png';

export default function Portfolio() {
  return (
    <div className="page">
      <h1>Portfolio</h1>
      <div className="card-container d-flex flex-row flex-wrap">
        {/* SUSTAINABLE REVIEWS */}
        <div className="card" >
          <img className="card-img-top" src={sustainableReviews} alt="Sustainable Reviews Website" />
          <div className="card-body">
            <h5 className="card-title">Sustainable Reviews</h5>
            <p className="card-text">A business review and rating app with a focus on sustainability. </p>
            <ul>
              <li>SQL database with Sequelize queries</li>
              <li>Sever side rendering using Handlebars</li>
              <li>Role: Backend Developer</li>
            </ul>
            <a href="http://obscure-ocean-20287.herokuapp.com/" className="card-link" target="_blank" rel="noreferrer">View the deployed site here!</a>
            <br />
            <a href="https://github.com/Chillaroo/SustainableReviews" className="card-link" target="_blank" rel="noreferrer">Explore the Github repository here!</a>
          </div>
        </div>

        {/* WEATHER PLANNER */}
        <div className="card" >
          <img className="card-img-top" src={weatherPlanner} alt="Weather Dashboard" />
          <div className="card-body">
            <h5 className="card-title">Weather Dashboard</h5>
            <p className="card-text">Displays current weather conditions and five-day forecast</p>
            <ul>
              <li>Retrieves data and images from OpenWeatherMap API</li>
              <li>Revisit the forecast for previous searches or clear search history</li>
              <li>Role: Sole Developer</li>
            </ul>
            <a href="https://chillaroo.github.io/weather-planner/Develop/index.html" className="card-link" target="_blank" rel="noreferrer">View the deployed site here!</a>
            <br />
            <a href="https://github.com/Chillaroo/weather-planner" className="card-link" target="_blank" rel="noreferrer">Explore the Github repository here!</a>
          </div>
        </div>

        {/*TECH BLOG*/}
        <div className="card" >
          <img className="card-img-top" src={techBlog} alt="Blog" />
          <div className="card-body">
            <h5 className="card-title">Tech Blog</h5>
            <p className="card-text">Sign in, publish a blog post, and comment on existing posts</p>
            <ul>
              <li>SQL database with sequelize queries</li>
              <li>User authentication with bcrypt</li>
              <li>Role: Sole developer</li>
            </ul>
            <a href="https://stormy-woodland-03331.herokuapp.com/" className="card-link" target="_blank" rel="noreferrer">View the deployed site here!</a>
            <br />
            <a href="https://github.com/Chillaroo/tech-blog" className="card-link" target="_blank" rel="noreferrer">Explore the Github repository here!</a>
          </div>
        </div>

        {/*JAVASCRIPT QUIZ*/}
        <div className="card" >
          <img className="card-img-top" src={jsQuiz} alt="JavaScript Quiz" />
          <div className="card-body">
            <h5 className="card-title">JavaScript Quiz</h5>
            <p className="card-text">Practice some basic JavaScript with this timed quiz</p>
            <ul>
              <li>Three second penalty for each wrong answer</li>
              <li>Enter your initials to save your score and time</li>
              <li>Role: Sole developer</li>
            </ul>
            <a href="https://chillaroo.github.io/javascript-quiz/" className="card-link" target="_blank" rel="noreferrer">View the deployed site here!</a>
            <br />
            <a href="https://github.com/Chillaroo/javascript-quiz" className="card-link" target="_blank" rel="noreferrer">Explore the Github repository here!</a>
          </div>
        </div>

        {/*TEAM PROFILE GENERATOR*/}
        <div className="card" >
          <img className="card-img-top" src={teamProfileGenerator} alt="Team Profile Generator" />
          <div className="card-body">
            <h5 className="card-title">Team Profile Generator</h5>
            <p className="card-text">Command line application that accepts user input and a team profile page</p>
            <ul>
              <li>Different prompts are given based on user choice</li>
              <li>Utilizes npm Inquirer, Bootstrap, and Font Awesome</li>
              <li>Role: Sole developer</li>
            </ul>
            <a href="https://watch.screencastify.com/v/547D327GZUSNCODpKtzF" className="card-link" target="_blank" rel="noreferrer">View a video demo here!</a>
            <br />
            <a href="https://github.com/Chillaroo/team-profile-generator" className="card-link" target="_blank" rel="noreferrer">Explore the Github repository here!</a>
          </div>
        </div>

      </div>
    </div>
  );
}
