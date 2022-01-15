import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`/user`)
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onDelete = (id: string) => {
    axios.delete(`user/${id}`).catch((error) => console.log(error));
    alert("Data Deleted");
    window.location.reload();
  };

  return (
    <React.Fragment>
      <Table className="table-sm text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="text-capitalize" key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>
                <LinkContainer to={`/edituser/${user._id}`}>
                  <Button variant="success" className="btn-mb">
                    <i className="fas fa-edit"></i>
                  </Button>
                </LinkContainer>
                &nbsp; &nbsp;
                <Button
                  variant="danger"
                  className="btn-mb"
                  onClick={() => onDelete(user._id)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default Users;
