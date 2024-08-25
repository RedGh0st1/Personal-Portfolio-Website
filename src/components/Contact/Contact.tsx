import "./Contact.css";
import { useRef } from "react";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    // console.log("form submitted", formRef.current);

    const inputData = new FormData(formRef.current!);
    console.log("this printing inputData: ", inputData);

    // for (const [key, value] of inputData.entries()) {
    //   console.log(key, value);
    // }

    // Reset the form after submission
    formRef.current?.reset();

    // Extract the 'name' input value from the FormData
    const name = inputData.get("name") as string;
    alert(`Thank you ${name} for your message`);
  };

  return (
    <section id="contacts" className="contact--section">
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
        <div className="form--container">
          <label htmlFor="name" className="contact--label">
            <span className="text-md">Name: </span>
          </label>
          <input
            type="text"
            className="contact--input text-md"
            id="name"
            name="name"
            required
          />
          {/* email */}
          <label htmlFor="email" className="contact--label">
            <span className="text-md"> Email: </span>
            <input
              type="email"
              className="contact--input text-md"
              id="email"
              name="email"
              required
            />
          </label>
          {/* or  contact number */}

          <label htmlFor="contactnumber" className="contact--label">
            <span className="text-md">Contact Number: </span>
            <input
              type="tel"
              className="contact--input text-md"
              id="contactnumber"
              name="contactnumber"
              required
            />
          </label>
          {/* subject: */}

          <label htmlFor="subject" className="contact--label">
            <span className="text-md">Subject: </span>
            <input
              type="text"
              className="contact--input text-md"
              id="subject"
              name="subject"
              required
            />
          </label>
          {/* textarea for the message */}
          {/* message */}

          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message: </span>
          </label>
          <textarea
            id="message"
            className="contact--input text-md"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
