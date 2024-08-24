import "./Contact.css";
import { useRef } from "react";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("form submitted", formRef.current);
    const formData = new FormData(formRef.current!);
  };

  return (
    <section id="contact" className="contact--section">
      <div className="section--title">
        <h2 className="">Contact Me</h2>
      </div>
      {/* Contact form section */}
      {/* name */}
      <form
        className="contact--form--section"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label htmlFor="name" className="contact--label">
          <span className="text-md">Name: </span>
        </label>
        <input
          type="text"
          className="contact--form--name"
          id="name"
          name="name"
          required
        />
        {/* email */}
        <label htmlFor="email" className="contact--label">
          Email:
          <input
            type="email"
            className="contact--form--email"
            id="email"
            name="email"
            required
          />
        </label>
        {/* or  contact number */}
        <label htmlFor="contactnumber" className="contact--label">
          Contact Number:
          <input
            type="telephone"
            className="contact--form--contactnumber"
            id="contactnumber"
            name="contactnumber"
            required
          />
        </label>

        {/* subject: */}
        <label htmlFor="subject" className="contact--label">
          Subject:
          <input
            type="text"
            className="contact--form--subject"
            id="subject"
            name="subject"
            required
          />
        </label>
        {/* textarea for the message */}
        {/* message */}
        <label htmlFor="message" className="contact--label">
          Message:
        </label>
        <textarea
          id="message"
          className="contact--form--message"
          name="message"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
};
export default Contact;
