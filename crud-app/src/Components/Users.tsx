import React from "react";
import { Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useGetAllUsersQuery, useDeleteUserMutation } from "../features/counter/userSlicer";

const Users = () => {
  const responseInfo = useGetAllUsersQuery("");

  const users = responseInfo.data;

  const [deleteUser, response] = useDeleteUserMutation();

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
          {users?.map((user: any) => (
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
                  onClick={() => {deleteUser(user._id)}}
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
