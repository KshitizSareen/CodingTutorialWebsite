import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function(education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function(work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map(skills => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              Basics of Computer Science
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">Learn about the basics of programming and how computers represent data using the binary coding system. Learn about bits, bytes and how a computer converts real world data in the binary format. Understand the different types of variables that are used in programming.</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              Data Structures
            </h1>
          </div>

          <div className="nine columns main-col">Learn about about different data structures like Arrays, Sets, Dictionaries and Hashmaps that are commonly used in programming. These data structures are essential in building real world applications and websites.</div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              Object Oriented Programming
            </h1>
          </div>

          <div className="nine columns main-col">Learn about Object-Oriented Programming (OOPS) concepts that works on the principles of abstraction, encapsulation, inheritance, and polymorphism. It will help you to create objects that contain methods to handle those objects. The basic concept of OOPs is to create objects, re-use them throughout the program, and manipulate these objects to get results. OOPS is widely used in programming and learning these concepts will be very beneficial in your journey.</div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              Large Scale websites and applications
            </h1>
          </div>

          <div className="nine columns main-col">Learn Web Development by building websites and games using HTML, CSS, Javascript. Also get an in depth understanding of the popular frameworks used for building large scale projects and how to use tools like Github to manage and host your projects.</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
             Languages you will learn
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>Learn the in demand languages of the industry that will give you a jumpstart in the world of programming</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
