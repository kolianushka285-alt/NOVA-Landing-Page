import { useState } from "react";

function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    ["What is NOVA?", "NOVA is an AI-powered productivity platform that helps teams manage tasks, automate workflows, and work smarter."],
    ["Can I try NOVA for free?", "Yes. NOVA offers a free Starter plan so you can explore the platform before upgrading."],
    ["Does NOVA support team collaboration?", "Yes. Teams can collaborate, manage projects, share tasks, and stay connected in one workspace."],
    ["Is my data secure?", "Yes. NOVA is designed with security in mind, helping teams keep their workspace and business data protected."],
    ["Can I upgrade my plan later?", "Absolutely. You can upgrade your plan as your team grows and you need more advanced features."],
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">FAQ</span>
          <h2>
            Questions?
            <br />
            <span>We have answers.</span>
          </h2>
          <p>Everything you need to know about NOVA.</p>
        </div>

        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <div className={`faq-item ${active === index ? "active" : ""}`} key={question}>
              <button
                onClick={() => setActive(active === index ? null : index)}
                aria-expanded={active === index}
              >
                <span>{question}</span>
                <b>{active === index ? "−" : "+"}</b>
              </button>

              {active === index && (
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;