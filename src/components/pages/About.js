import React from 'react';
import profilePic from '../../assets/profile-pic.jpeg';

export default function About() {
  return (
    <div id="about">
      <img id="rachel" src={profilePic} />
      <h1>Hello World!</h1>
      <p>
        I've been building web applications and learning software development for nearly six months, and I'm so excited to apply these skills in a new career! I've built several web applications with teams and on my own. Check them out in my portfolio! I also have a background in mathematics and physics, and I've taught these subjects for the past five years. 
      </p>
    </div>
  );
}
