import { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };

  const [user, setUser] = useState({ initialFormState });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label className="form-label mt-3">Name</label>
      <input
        className="form-control"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      ></input>
      <label className="form-label">Username</label>
      <input
        className="form-control"
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      ></input>
      <button className=" btn btn-outline-primary mt-3">Add new user</button>
    </form>
  );
};

export default AddUserForm;
