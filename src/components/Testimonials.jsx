function Testimonials() {
  const testimonials = [
    ["SM", "Sarah Mitchell", "Product Manager · LUMA", "NOVA completely changed how our team manages projects. We spend less time organizing work and more time actually doing it."],
    ["DC", "Daniel Carter", "Founder & CEO · VERTEX", "The automation alone saves us hours every week. NOVA gives our growing team the structure we need without slowing us down."],
    ["EJ", "Emily Johnson", "Operations Lead · ORBIT", "Everything finally lives in one place. Our team is more aligned, our workflows are faster, and our productivity has never been better."],
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">TESTIMONIALS</span>
          <h2>
            Loved by teams that
            <br />
            <span>move fast.</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(([initials, name, role, quote]) => (
            <div className="testimonial-card" key={name}>
              <div className="stars">★★★★★</div>
              <p>“{quote}”</p>

              <div className="testimonial-person">
                <div>{initials}</div>
                <span>
                  <strong>{name}</strong>
                  <small>{role}</small>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;