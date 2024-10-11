import React from "react";

function Regestration() {
  return (
    <div className="w-full md:w-1/1">
      <h1 className="text-4xl">Create New User</h1>
      <br />
      <div>
        <label>* User ID:</label>
        <input
          className="grow border"
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label>*First Name:</label>
        <input
          className="grow border"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label>Middle Initial:</label>
        <input
          className="grow border"
          type="text"
          name="middleInitial"
          value={formData.middleInitial}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label>*Last Name:</label>
        <input
          className="grow border"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label>Email:</label>
        <input
          className="grow border"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label>*Password:</label>
        <input
          className="grow border"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label>*Confirm Password:</label>
        <input
          className="grow border"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label>Date of Birth:</label>
        <input
          className="grow border"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <label>Gender:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          className="grow"
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          checked={formData.gender === "other"}
          onChange={handleChange}
        />
        Other
      </div>
      <br />

      <div>
        <label>Hobby:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="checkbox" name="hobby" value="C" onChange={handleChange} />
        C
        <input
          type="checkbox"
          name="hobby"
          value="C++"
          onChange={handleChange}
        />
        C++
        <input
          type="checkbox"
          name="hobby"
          value="C#"
          onChange={handleChange}
        />
        C#
      </div>
      <br />

      <div>
        <label>State/Province:</label>
        <select
          className="grow border"
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="0">--</option>
          <option value="Utter Pradesh">Utter Pradesh</option>
          <option value="Bihar">Bihar</option>
          <option value="Uterakhand">Uterakhand</option>
        </select>
      </div>
      <br />

      <div>
        <label>Country:</label>
        <select
          className="grow border"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="0">--</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <br />

      <div>
        <label>Phone:</label>
        <input
          className="grow border"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <br />

      <div>
        <button
          type="button"
          className="btn btn-outline btn-success"
          onClick={handleSubmit}
        >
          Create New User
        </button>
      </div>
    </div>
  );
}

export default Regestration;
