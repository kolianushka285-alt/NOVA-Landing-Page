import { useState } from "react";

function FAQ() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "What is NOVA?",
      answer:
        "NOVA is an AI-powered productivity platform that helps teams manage projects, automate repetitive tasks, and collaborate efficiently from one workspace.",
    },
    {
      question: "How can NOVA help my team?",
      answer:
        "NOVA brings projects, tasks, collaboration, and productivity insights together so your team can spend less time managing work and more time getting important work done.",
    },
    {
      question: "Does NOVA offer a free plan?",
      answer:
        "Yes. NOVA offers a free Starter plan for individuals and small teams who want to explore the platform before upgrading to a paid plan.",
    },
    {
      question: "Can I upgrade or change my plan later?",
      answer:
        "Yes. You can upgrade, downgrade, or change your plan as your team's needs change. Your workspace can grow with your business.",
    },
    {
      question: "Is NOVA suitable for growing teams?",
      answer:
        "Absolutely. NOVA is designed to support teams of different sizes, from small startups to growing organizations that need a scalable productivity platform.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading faq-heading">
          <span className="section-label">FAQ</span>

          <h2>
            Questions?
            <br />
            <span>We've got answers.</span>
          </h2>

          <p>
            Everything you need to know about NOVA and how it helps your
            team work smarter.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                className={`faq-item ${isOpen ? "active" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>

                  <b
                    className={`faq-icon ${isOpen ? "rotate" : ""}`}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </b>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`faq-answer ${isOpen ? "show" : ""}`}
                  aria-hidden={!isOpen}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;