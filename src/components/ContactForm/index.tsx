import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  function validateForm() {
    return email.length > 0 && name.length > 0 && message.length > 0;
  }

  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    const submission = { name, email, message };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...submission }),
    })
      .then(() =>
        setConfirmation(
          `Thanks, ${name}! Your message has been submitted, and I'll get in touch with you ASAP.`
        )
      )
      .catch((error) => setConfirmation("Something went wrong :( \n" + error));
    e.preventDefault();
  }

  return (   
    
      <Form onSubmit={handleSubmit} className='py-3'>
        <input type="hidden" name="form-name" value="contact" />
            <Form.Group controlId="Email">
              <Form.Label srOnly>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="* Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="Name">
              <Form.Label srOnly>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="* Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
        <Form.Group controlId="Message">
          <Form.Label srOnly>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="* Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        {confirmation ? (
          <Alert
            dismissible
            onClose={() => setConfirmation("")}
          >
            {confirmation}
          </Alert>
        ) : (
          <Form.Group>
          <Button
            type="submit"
            variant="outline-light"
            disabled={!validateForm()}
          >
            Send message
          </Button>
          </Form.Group>
        )}
      </Form>
  );
}
export default ContactForm;
