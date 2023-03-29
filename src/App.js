import { useState } from "react";
import "./App.css";
import UserTable from "./Tables/UserTable";
import AddUserForm from "./Forms/AddUserForm";
import EditUserForm from "./Forms/EditUserForm";

function App() {
  const usersData = [
    { id: 1, name: "Rajesh", username: "rjrajesh" },
    { id: 2, name: "Lokesh", username: "ttlokesh" },
    { id: 3, name: "Prem", username: "prprem" },
  ];

  const addUser = (user) => {
    user.id = users.id + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  };

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, name: "", username: "" };

  const [currentUser, setCurrentuser] = useState({ initialFormState });

  const editRow = (user) => {
    setEditing(true);
    setCurrentuser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container ">
      <nav class="navbar navbar-dark bg-light text-white">
        <h2 className="mx-3">CRUD APP</h2>
      </nav>
      <div
        id="form-container"
        className="d-flex flex-row justify-content-around mt-4"
      >
        <div>
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              {" "}
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="view-container">
          <h2>View users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
   
  );
}

export default App;
