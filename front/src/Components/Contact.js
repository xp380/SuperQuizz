import React from "react";
import { notification } from "antd"
import { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Vincent",
    message: "",
    reply_to: "vincentkouoi@gmail.com",
  });

  const openNotification = () => {
    notification.open({
      message: 'Message sent',
      style: {
        width: 300,
      },
    });
  };
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
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bolder" }}>
        Formulaire d'email
      </h1>
      <div
        style={{
          marginLeft: 400,
          marginTop: 100,
          width: 800,
          border: "solid",
          height: 300,
        }}
      >
        <form onSubmit={onSubmit}>
          <input
            style={{ marginLeft: 200, width: 300, marginTop: 30 }}
            type="email"
            name="from_name"
            placeholder="votre adresse email"
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
            style={{ marginTop: 20, width: 700, height: 100, marginLeft: 40 }}
            type="textarea"
            name="message"
            placeholder="Votre message"
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
          <button
            onClick={openNotification}
            style={{ width: 150, marginTop: 20, marginLeft: 260 }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
