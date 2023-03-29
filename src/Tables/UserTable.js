import React from "react";

const UserTable = (props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="px-5">Name</th>
          <th className="px-5">Username</th>
          <th className="px-5">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <tr keys={user.id}>
              <td className="px-5">{user.name}</td>
              <td className="px-5">{user.username}</td>
              <td>
                <button
                  className="btn btn-outline-secondary mx-3"
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger mx-3"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr col-span={3}>No Users</tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
