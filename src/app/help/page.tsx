
'use client'

import React, { useState } from 'react';

const HelpCenterPage: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (index === openAccordion) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="mx-auto p-8">
      <h1 className="text-3xl text-center py-4 font-semibold mb-4">Technotips Help Center</h1>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-lg">
              <div
                className="flex justify-between p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="font-semibold">{item.question}</div>
                <div className="transform rotate-0">
                  {openAccordion === index ? '-' : '+'}
                </div>
              </div>
              {openAccordion === index && (
                <div className="p-4">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;

const faqData = [
  {
    question: 'How do I create a post?',
    answer: 'To create a post, login and join the community',
  },
  {
    question: 'How do I edit my profile?',
    answer: 'To edit your profile, go to your profile Setting Page...',
  },
  // Add more FAQ items as needed
];
