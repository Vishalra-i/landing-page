'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faX } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the cost of a mobile application?",
      answer: "The cost of a mobile application depends on various factors including the features, design, complexity, and platform."
    },
    {
      question: "Do you provide a guarantee for the mobile application?",
      answer: "Yes, we provide a guarantee for our mobile applications. We ensure they meet your requirements and provide support post-launch."
    },
    {
      question: "How long will development take?",
      answer: "Development terms depend on the requirements. Medium projects take up to 3 months, large projects take about 4-6 months."
    },
    {
      question: "I will not tell my idea, do you guarantee confidentiality?",
      answer: "Yes, we guarantee confidentiality for all our clients and projects. We can sign a non-disclosure agreement if needed."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">FAQ</h2>
      <div className="grid grid-cols-1  md:grid-cols-2">
      {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border border-l-0  border-r-0 border-t-gray-400 border-b-gray-400">
          <div
            className="flex justify-between items-center  p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <FontAwesomeIcon
              icon={activeIndex === index ? faX : faPlus}
              className="w-4 h-4 text-green-400 p-2 bg-white rounded-full shadow-lg"
            />
          </div>
          <div
            className={`transition-all duration-500 overflow-hidden ${activeIndex === index ? 'max-h-screen p-4 bg-gray-100' : 'max-h-0'}`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default FAQ;
