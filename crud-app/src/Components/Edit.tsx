import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useGetUserByIdQuery,
  useUpdateUserMutation,
} from "../features/counter/userSlicer";

const Edit = () => {
  let history = useHistory();
  let params: any = useParams();
  const id = params.id;

  const response = useGetUserByIdQuery(id);
  const [updateUser, responseInfo] = useUpdateUserMutation();

  console.log(response.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const updatedUserData = {
    name: name,
    email: email,
    age: age,
    gender: gender,
  };

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
      <Form
        onSubmit={handleSubmit((event) => updateData())}
        className="d-grid gap-2 text-center"
      >
        <Form.Group controlId="name">
          <Form.Label className="">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            // required
            {...register("name", {
              required: "Name is required...!",
              pattern: {
                value: /^[A-Za-z]/,
                message: "Invalid Name...!",
              },
              minLength: 3,
              maxLength: 30,
            })}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name && errors.name.message}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className="">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            // required
            {...register("email", {
              required: "E_mail is required...!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid E_mail...!",
              },
            })}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && errors.email.message}
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label className="">Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Age"
            required
            {...register("age", {
              required: "Age is required...!",
            })}
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          {errors.age && errors.age.message}
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label className="">Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender"
            required
            {...register("gender", {
              required: "Gender is required...!",
            })}
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
          {errors.gender && errors.gender.message}
        </Form.Group>
        <Button type="submit" className="mt-3" variant="primary">
          Update User
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default Edit;
