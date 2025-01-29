import React, { useState } from "react";

const Userformgetinput = () => {
  const [user, setUsers] = useState({ hobbies: [] });
  function getInput(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setUsers((user) => {
        const hobbies = checked
          ? [...user.hobbies, value]
          : user.hobbies.filter((hobby) => hobby !== value);
        return { ...user, hobbies };
      });
    } else {
      setUsers((user) => ({
        ...user,
        [name]: value,
      }));
    }
  }
  function submitUser(event) {
    event.preventDefault();
  }
  return (
    <>
      <form
        action="post"
        onSubmit={submitUser}
        className="col-lg-6 my-5 p-5 mx-auto shadow"
      >
        <div className="mt-4">
          <input
            type="text"
            name="username"
            onChange={(event) => getInput(event)}
            className="form-control"
            placeholder="Enter username"
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            name="email"
            onChange={(event) => getInput(event)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mt-4">
          <input
            type="number"
            name="number"
            onChange={(event) => getInput(event)}
            className="form-control"
            placeholder="Enter number"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Select City</label>
          <select
            name="city"
            id=""
            className="form-control"
            onChange={(event) => getInput(event)}
          >
            <option value="">Select City</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Gandhinagar">Gandhinagar</option>
          </select>
        </div>
        <div className="mt-4">
          <label htmlFor="">Gender</label>
          <br />
          <input
            type="radio"
            onChange={(event) => getInput(event)}
            value="male"
            name="gender"
          />
          <label htmlFor="">Male</label>
          <br />
          <input
            type="radio"
            onChange={(event) => getInput(event)}
            value="female"
            name="gender"
          />
          <label htmlFor="">Female</label>
        </div>
        <div className="mt-4">
          <label>Hobbies</label>
          <br />
          {["Play", "Sports", "Reading", "Writing"].map((hobby) => (
            <div key={hobby}>
              <input
                type="checkbox"
                name="hobbies"
                value={hobby}
                checked={user.hobbies.includes(hobby)}
                onChange={getInput}
              />
              <label> {hobby}</label>
            </div>
          ))}
        </div>
        <button type="submit" className="mt-4 btn btn-success form-control">
          Submit
        </button>
      {user.username && <span>Username: {user.username}</span>} <br />
      {user.email && <span>Email: {user.email}</span>} <br />
      {user.number && <span>Number: {user.number}</span>} <br />
      {user.city && <span>City: {user.city}</span>} <br />
      {user.gender && <span>Gender: {user.gender}</span>} <br />
      {user.hobbies && <span>Hobbies: {user.hobbies.join(",")}</span>}
      </form>
    </>
  );
};

export default Userformgetinput;
