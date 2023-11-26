import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });

  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://ethnus-backend-gcki.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
      } else {
        setSuccessMessage("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("Error sending message. Please try again.");
    }
  };

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us know.
        </p>
        {successMessage && (
          <div className="text-green-600 text-center">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="form__lable">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="form__input mt-1"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject" className="form__lable">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__lable">
              Your Message
            </label>
            <textarea
              rows='6'
              type="text"
              id="message"
              placeholder="Leave a comment....."
              className="form__input mt-1"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
