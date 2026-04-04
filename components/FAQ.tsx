"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  heading?: string;
}

export default function FAQ({ items, heading = "Frequently Asked Questions" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{heading}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 cursor-pointer bg-white"
              aria-expanded={open === i}
            >
              <span>{item.question}</span>
              <span className="text-gray-400 ml-2">{open === i ? "\u2212" : "+"}</span>
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed bg-white [&_a]:text-blue-700 [&_a]:underline [&_a]:hover:text-blue-900" dangerouslySetInnerHTML={{ __html: item.answer }}>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
