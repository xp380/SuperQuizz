import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Vincent",
    message: "",
    reply_to: "vincentkouoi@gmail.com",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_9w9kkn5",
      "template_si9qbbl",
      toSend,
      "user_feO8qUGQpsM2XPz42CPxo"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="from_name"
          placeholder="from name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          style={{ display: "none" }}
          type="text"
          name="to_name"
          placeholder="to name"
          value={toSend.to_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          style={{ display: "none" }}
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
