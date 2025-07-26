'use client';
import React, { useState } from 'react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null); // To store the ID of the open question

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id); // Close if already open, else open new
  };

  const faqs = [
    {
      id: 1,
      question: "What does Rotaract mean?",
      answer: "Rotaract is a global network of young leaders aged 18-30 who come together to create positive change in their communities through service projects and leadership development."
    },
    {
      id: 2,
      question: "What is the main motto of Rotaract?",
      answer: "The main motto of Rotaract is 'Service Above Self,' emphasizing selfless service to the community and personal growth."
    },
    {
      id: 3,
      question: "What's the difference between Rotary and Rotaract?",
      answer: "Rotary is an international service organization for adults, while Rotaract is its youth branch, focusing on young individuals aged 18-30 with an emphasis on leadership and community service."
    },
    {
      id: 4,
      question: "Who can join Rotaract?",
      answer: "Anyone aged 18-30 who is interested in community service, leadership development, and networking can join Rotaract, regardless of background or profession."
    },
    {
      id: 5,
      question: "What does Rotaract club do?",
      answer: "Rotaract clubs organize service projects, professional development events, and social activities to address community needs and foster personal growth."
    },
    {
      id: 6,
      question: "What's the difference between Rotary and Rotaract?",
      answer: "Rotary is an international service organization for adults, while Rotaract is its youth branch, focusing on young individuals aged 18-30 with an emphasis on leadership and community service."
    },
    {
      id: 7,
      question: "What are the 4 avenues of Rotaract?",
      answer: "The four avenues are Community Service, Professional Development, International Understanding, and Club Service."
    },
    {
      id: 8,
      question: "What is the main aim of Rotaract club?",
      answer: "The main aim is to provide opportunities for young people to enhance their leadership skills, serve their communities, and promote goodwill globally."
    }
  ];

  return (
    <div className="py-8 md:py-12 px-4" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#000000] mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-aldrich)" }}
          >
            FAQ : FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {[0, 1].map((col) => (
            <div key={col} className="w-full md:w-1/2 space-y-4">
              {faqs
                .slice(
                  col * Math.ceil(faqs.length / 2),
                  (col + 1) * Math.ceil(faqs.length / 2)
                )
                .map((faq) => (
                  <div
                    key={faq.id}
                    className="border-b border-gray-300 pb-4 cursor-pointer"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <h3
                      className="text-base md:text-lg font-semibold text-[#333333] mb-2 transition-colors duration-300"
                      style={{ fontFamily: "var(--font-cantata)" }}
                    >
                      {faq.question}
                    </h3>
                    {openFAQ === faq.id && (
                      <p
                        className="text-base md:text-lg text-gray-600 leading-relaxed"
                        style={{ fontFamily: "var(--font-cantata)" }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
