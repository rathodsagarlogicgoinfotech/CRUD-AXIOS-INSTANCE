import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { createUsers } from "../../backEndHandler/backEndHandler";

const SignUp = () => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [phoneno, setPhoneNo] = useState();
  const [city, setCity] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (username && email && age && phoneno && city) {
        const userData = {
          username,
          email,
          age: Number(age),
          phoneno: Number(phoneno),
          city,
        };
        createUsers({ data: userData });
      } else {
        alert("Please fill the fields");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Username :</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Your Username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Age :</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter Your Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email :</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Enter your email id"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter The City You Live"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Phoneno :</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Your Number"
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Button className="mx-auto d-block mt-5" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
