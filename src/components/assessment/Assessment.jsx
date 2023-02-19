import React, { useState } from "react";
import { AssessmentStyle } from "./AssessmentStyle";

const Assessment = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <AssessmentStyle>
      <h2 className="assessment-heading">Get free assessment today</h2>
      <p className="assessment-text">
        Feel free to enquire about any questions you have
      </p>
      <form action="" className="form">
        <input
          type="text"
          className="input"
          placeholder="Full name"
          name="name"
          onChange={handleChange}
          value={formData.name || ""}
        />
        <input
          type="text"
          className="input"
          placeholder="Email address"
          name="email"
          onChange={handleChange}
          value={formData.email || ""}
        />
        <textarea
          placeholder="Type message here"
          name="message"
          onChange={handleChange}
          value={formData.message || ""}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="submit-btn">Send</button>
      </form>
    </AssessmentStyle>
  );
};

export default Assessment;
