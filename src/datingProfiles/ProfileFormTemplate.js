import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CardBody,
  CardHeader,
  CardImg
} from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Form
        className="col-sm-6 offset-3"
        style={{
          borderColor: "gray"
        }}
      >
        <CardHeader>Create a Profile</CardHeader>
        <FormGroup
          row
          style={{
            paddingTop: "10px"
          }}
        >
          <Label for="name" sm={3}>
            User Name
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              name="userName"
              id="exampleEmail"
              placeholder="User Name"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="age" sm={3}>
            Age
          </Label>
          <Col sm={9}>
            <Input type="number" name="age" placeholder="Age" />
          </Col>
        </FormGroup>{" "}
        <FormGroup row>
          <Label for="gender" sm={3}>
            Gender
          </Label>
          <Col sm={9}>
            <Input
              type="text"
              name="gender"
              placeholder="What gender do you identify as?"
            />
          </Col>
        </FormGroup>
        {/* <FormGroup tag="fieldset" row>
          <Label for="age" sm={3}>Select Gender</Label>
          <Col sm={9}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="female" /> Female
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="male" />   Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="other" />   Other
              </Label>
            </FormGroup>
          </Col>
        </FormGroup> */}
        {/* <FormGroup row>
          <Label for="gender" sm={3}>
            Gender
          </Label>
          <Col sm={9}>
            <Input type="select" name="gender" id="gender" />
            <option name="female" value="1">
              Female
            </option>
            <option name="male">Male</option>
            <option name="trans">Trans</option>
          </Col>
        </FormGroup> */}
        <FormGroup row>
          <Label for="bio" sm={3}>
            Bio
          </Label>
          <Col sm={9}>
            <Input type="textarea" name="bio" id="bio" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={3}>
            File
          </Label>
          <Col sm={9}>
            <Input type="file" name="image" id="image" />
          </Col>
        </FormGroup>
        {/* <FormGroup row>
          <Label for="checkbox3" sm={3}>
            Select gender
          </Label>
          <Col sm={{ size: 9 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox3" /> Check me out
              </Label>
            </FormGroup>
          </Col>
        </FormGroup> */}
        <FormGroup check row>
          <Col sm={{ size: 9, offset: 3 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
