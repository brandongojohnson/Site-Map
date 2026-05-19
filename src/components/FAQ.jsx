import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const FAQ = ({ items }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((faq, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
        >
          <button
            onClick={() => toggleFaq(idx)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
            <ChevronRight
              className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                expandedFaq === idx ? 'rotate-90' : ''
              }`}
            />
          </button>

          {expandedFaq === idx && (
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
