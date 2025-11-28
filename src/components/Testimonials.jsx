import "../styles/testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alice Johnson",
      feedback: "Derrick is a phenomenal developer! Highly professional and delivered on time."
    },
    {
      name: "Bob Smith",
      feedback: "Excellent work and communication. I would hire again without hesitation."
    },
    {
      name: "Charlie Lee",
      feedback: "Very creative, skilled, and easy to work with. Recommended!"
    }
  ];

  return (
    <section id="testimonials" className="testimonials fade-in">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{t.feedback}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
