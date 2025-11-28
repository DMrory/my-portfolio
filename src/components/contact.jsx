import "../styles/Contact.css"; // fix path
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "your_service_id",
      "your_template_id",
      form.current,
      "your_public_key"
    );

    alert("Message sent!");
  };

  return (
    <section id="contact" className="container fade-in">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input name="name" placeholder="Your Name" required />
        <input name="email" placeholder="Email" type="email" required />
        <textarea name="message" placeholder="Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
