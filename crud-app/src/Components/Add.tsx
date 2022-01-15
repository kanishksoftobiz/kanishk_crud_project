import React, { useState, useEffect, useCallback } from "react";
import { Form, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Add = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const postData = () => {
    axios.post(`/user`, { name, email, age, gender });
    history.push("/");
  };

  return (
    <React.Fragment>
      <h1 className="text-center mt-3">User Add Screen</h1>
      <Form className="d-grid gap-2 text-center">
        <Form.Group controlId="name">
          <Form.Label className="">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className="">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label className="">Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label className="">Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          className="mt-3 primary"
          variant="primary"
          onClick={postData}
        >
          Add User
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default Add;
