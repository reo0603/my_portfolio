import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Reo Charlie </span>
            from <span className="purple"> United States.</span>
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity" style={{ marginTop: '10px' }}>
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity" style={{ marginTop: '10px' }}>
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity" style={{ marginTop: '10px' }}>
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Reo Charlie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
