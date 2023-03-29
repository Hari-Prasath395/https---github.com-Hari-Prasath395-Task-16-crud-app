import { useEffect, useState } from "react";

const EditUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
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
      />
      <label className="form-label">Username</label>
      <input
        className="form-control"
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className="btn btn-outline-primary mt-3">Update User</button>
      <button
        className="btn btn-outline-warning mx-3 mt-3"
        onClick={() => {
          props.setEditing(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
