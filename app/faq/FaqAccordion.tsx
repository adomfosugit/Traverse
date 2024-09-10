import { useState } from 'react';

const FaqAccordion = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 "
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          onClick={() => {
            setSelected(0);
          }}
          aria-controls="accordion-collapse-body-1"
        >
          <span>After you have purchased your land what happens?</span>
          <svg
            data-accordion-icon
            className="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${selected === 0 ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 font-light border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500">
            Ownership of land can be seen from two angles: physical possession
            and legal possession. You must ensure to demonstrate the two levels
            of possession to prevent encroachments on your land. You need to
            register your interest in the land at the Lands Commission. This
            process will allow your details entered into the public records as
            the owner of that parcel of land. A land title certificate will be
            issued to you after the processes at the Lands Commission. On the
            other hand, you need to develop the land to demonstrate to the
            entire world that you one that parcel. It can be a temporal
            structure. You can use Traverse to sort out your development and
            also your land registration process.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  hover:bg-gray-100"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          onClick={() => {
            setSelected(1);
          }}
          aria-controls="accordion-collapse-body-2"
        >
          <span>
            What processes will I go through to get land title certificate?
          </span>
          <svg
            data-accordion-icon
            className="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${selected === 1 ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 font-light border border-b-0 border-gray-200">
          <p className="mb-2 text-gray-500 ">
            Ownership of land can be seen from two angles: physical possession
            and legal possession. You must ensure to demonstrate the two levels
            of possession to prevent encroachments on your land. You need to
            register your interest in the land at the Lands Commission. This
            process will allow your details entered into the public records as
            the owner of that parcel of land. A land title certificate will be
            issued to you after the processes at the Lands Commission. On the
            other hand, you need to develop the land to demonstrate to the
            entire world that you one that parcel. It can be a temporal
            structure. You can use Traverse to sort out your development and
            also your land registration process.
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 "
          data-accordion-target="#accordion-collapse-body-3"
          aria-expanded="false"
          onClick={() => {
            setSelected(2);
          }}
          aria-controls="accordion-collapse-body-3"
        >
          <span>
            When you select land on the Traverse portal for purchase, what
            happens?
          </span>
          <svg
            data-accordion-icon
            className="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`${selected === 2 ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-5 font-light border border-t-0 border-gray-200">
          <p className="mb-2 text-gray-500 ">
            Ownership of land can be seen from two angles: physical possession
            and legal possession. You must ensure to demonstrate the two levels
            of possession to prevent encroachments on your land. You need to
            register your interest in the land at the Lands Commission. This
            process will allow your details entered into the public records as
            the owner of that parcel of land. A land title certificate will be
            issued to you after the processes at the Lands Commission. On the
            other hand, you need to develop the land to demonstrate to the
            entire world that you one that parcel. It can be a temporal
            structure. You can use Traverse to sort out your development and
            also your land registration process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
