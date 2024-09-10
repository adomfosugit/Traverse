'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  HOME_URL,
  LONG_DESCRIPTION,
  PROJECTS_URL,
} from '../../config/constants';
import FaqAccordion from './FaqAccordion';

const FAQ = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-screen pt-16 md:pt-16">
        <div className="w-full mr-2 md:w-10/12 md:h-10/12 md:bg-white rounded-md md:mx-auto px-3 md:px-10 py-10">
          <h3 className="pb-2 font-medium">Land Purchase Information</h3>
          <p className="pb-2">
            The Traverse Land due diligence process includes the following
            steps:
          </p>
          <div className="bg-gray-100 md:px-10 md:py-10 grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col">
              <Image
                src="/illustrations/documents_illus.svg"
                alt="Picture of the author"
                width={67}
                height={47}
              />
              <h4 className="pt-5 font-medium">Review land documents</h4>
              <p className="w-2/3 pt-5">{LONG_DESCRIPTION}</p>
            </div>
            <div className="flex flex-col">
              <Image
                src="/illustrations/commission_illus.svg"
                alt="Picture of the author"
                width={67}
                height={47}
              />
              <h4 className="pt-5 font-medium">
                Lands Commission Due Diligence
              </h4>
              <p className="w-2/3 pt-5">{LONG_DESCRIPTION}</p>
            </div>
            <div className="flex flex-col">
              <Image
                src="/illustrations/survey_illus.svg"
                alt="Picture of the author"
                width={67}
                height={47}
              />
              <h4 className="pt-5 font-medium">Site Visit by Surveyor</h4>
              <p className="w-2/3 pt-5">{LONG_DESCRIPTION}</p>
            </div>
          </div>

          <h3 className="py-10 font-medium">Land Purchase Information</h3>
          <FaqAccordion />
          <div className="flex">
            <input
              type="checkbox"
              title="I understand all information that has been provided"
              className="mt-9 checked:bg-traverse-yellow"
            />
            <p className="ml-3 mt-8">
              I understand all information that has been provided
            </p>
          </div>
        </div>
        <div className="flex w-full mr-2 md:w-10/12 md:mx-auto px-3 md:px-10 py-10 justify-between">
          <Link
            href={HOME_URL}
            className=" border border-black bg-transparent w-44 py-3 rounded text-center"
          >
            Go back{' '}
          </Link>
          <Link
            href={PROJECTS_URL}
            className="bg-traverse-yellow py-3 w-44 rounded text-center"
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
};

export default FAQ;
