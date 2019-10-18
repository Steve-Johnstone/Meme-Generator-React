import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          onChange={props.handleChange}
          value={props.data.firstName}
        />

        <br />

        <input
          placeholder="Last Name"
          type="text"
          name="lastName"
          onChange={props.handleChange}
          value={props.data.lastName}
        />

        <br />

        <input
          placeholder="Age"
          type="text"
          name="age"
          onChange={props.handleChange}
          value={props.data.age}
        />

        <br />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />
          Female
        </label>

        <br />
        <br />

        <select
          name="favDestination"
          value={props.data.favDestination}
          onChange={props.handleChange}
        >
          <option value="Oslo">Oslo</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Paris">Paris</option>
          <option value="Venice">Venice</option>
        </select>
      </form>

      <br />
      <br />

      <h1>Entered information</h1>
      <p>
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your favourite destination is: {props.data.favDestination}</p>
    </main>
  );
}

export default FormComponent;
