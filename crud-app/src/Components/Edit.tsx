import React, { useState, useEffect, useCallback } from "react";
import { Form, Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const Edit = () => {
  let history = useHistory();
  let params: any = useParams();
  const id = params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    axios
      .get(`/user/${id}`)
      .then(({ data }) => {
        setName(data.name);
        setEmail(data.email);
        setAge(data.age);
        setGender(data.gender);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateData = () => {
    axios
      .put(`/user/${id}`, {
        name,
        email,
        age,
        gender,
      })
      .catch((error) => console.log(error));
    history.push("/");
  };

  return (
    <React.Fragment>
      <h1 className="text-center mt-3">User Edit Screen</h1>
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
          className="mt-3"
          variant="primary"
          onClick={updateData}
        >
          Update User
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default Edit;
