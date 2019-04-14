
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const Profile = props => {
  return (
    <div>
      <div
        className="main-container"
        style={{
          float: "left",
          right: "100px",
          top: "60px",
          paddingRight: "50px"
        }}
      >
        <Card>
          <CardImg
            className="image"
            top
            height="450"
            width="200"
            src="https://media.istockphoto.com/vectors/woman-gesturing-vector-id165748296?k=6&m=165748296&s=612x612&w=0&h=z8ApG13RtBUaa-tgWipMSRcVkd_cPVkuIryOyzQ-Xek="
          />
          <br />
          <CardBody>
            <h3>Jessica</h3>
            <CardSubtitle>Age: 38</CardSubtitle>
            <CardSubtitle>Gender: Female</CardSubtitle>
            <CardSubtitle>About Me</CardSubtitle>
            <CardText>I'm the best!!</CardText>
          </CardBody>
        </Card>
      </div>

      <div
        className="side-container"
        style={{
          float: "right",
          left: "200px",
          width: "500px"
        }}
      >
        <div style={{ paddingBottom: "40px" }}>
          <Card>
            <CardBody>
              <CardTitle>What I'm Looking For...</CardTitle>
              <p>A tall, dark, funny, handsome man.</p>
            </CardBody>
          </Card>
        </div>
        <div style={{ paddingBottom: "40px" }}>
          <Card>
            <CardBody>
              <CardTitle>Talents</CardTitle>
              <p>I am a semi-pro ballerina</p>
            </CardBody>
          </Card>
        </div>
        <div style={{ paddingBottom: "40px" }}>
          <Card>
            <CardBody>
              <CardTitle>Hobbies</CardTitle>
              <p>I love to Dance, Code and Jiu-Jitsu</p>
            </CardBody>
          </Card>
        </div>
        <div style={{ paddingBottom: "40px" }}>
          <Card>
            <CardBody>
              <CardTitle>Aspirations</CardTitle>
              <p>I apire to adpot all the dogs!</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;

