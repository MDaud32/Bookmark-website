import React from 'react';
import { Disclosure } from '@headlessui/react';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';

const faqs = [
  {
    id: 1,
    question: 'What is your refund policy?',
    answer: `If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.`,
  },
  {
    id: 2,
    question: 'Do you offer technical support?',
    answer: `No.`,
  },
  {
    id: 3,
    question: 'How much is shipping?',
    answer: `Orders over $49 ship free! All other orders ship for a flat rate of $4.95.`,
  },
  {
    id: 4,
    question: 'How do I contact support?',
    answer: `We offer support over email, and the best way to contact us is through the in-app help menu.`,
  },
  {
    id: 5,
    question: 'How long does it take to get my order?',
    answer: `Most customers can expect to receive their food and supplies within 1 to 3 days. Orders that require prescription approval or personalization may take longer to ship.`,
  },
];
const FAQ = () => {
  return (
    <div className="mt-40 mx-auto px-6">
      <div className="flex flex-col text-center mx-auto mb-10">
        <h1 className="text-5xl font-bold ">Frequently Asked Questions</h1>
        <p className="text-gray-400 max-w-md text-center mx-auto mt-4 text-xl">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="w-full px-4 pt-8">
        <div className="mx-auto lg:w-[800px] h-[400px] lg:max-w-3xl rounded-2xl bg-white p-2 text-lg">
          <h1 className="text-center text-4xl py-4">FAQ</h1>
          {faqs.map((faq) => (
            <Disclosure key={faq.id}>
              {({ open }) => (
                <>
                  <div>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-3 mb-2 text-left font-medium text-xl border-b">
                      <span>{faq.question}</span>
                      {open ? <BiMinus /> : <BsPlusLg />}
                    </Disclosure.Button>
                    {open && (
                      <Disclosure.Panel
                        static
                        className="text-gray-500 flex w-full justify-between rounded-lg px-4 mb-2 text-left text-lg font-medium">
                        {faq.answer}
                      </Disclosure.Panel>
                    )}
                  </div>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
