'use client';

import Link from 'next/link';
import { SERVICE_AUTH_SIGN_IN_URL } from '../../../../config/constants';

const ServiceSignUpReview = () => {
  return (
    <div className="bg-sign-up bg-cover bg-no-repeat bg-center h-screen overflow-hidden">
      <section className="w-screen h-full">
        <div className="mx-3 md:mx-24 md:my-24 md:w-2/4 text-white font-sans ">
          <h1 className="flex  text-4xl font-medium mt-56">
            Submission Successful!
          </h1>
          <p className="flex font-extralight text-large pt-3 tracking-wide">
            Your application will be reviewed within 24 hours. You will receive
            an email via name@mail.com on the status.
          </p>
        </div>
        <Link
          href={SERVICE_AUTH_SIGN_IN_URL}
          className="mt-10 bg-traverse-yellow p-3 rounded-md text-black px-10 ml-24"
        >
          Sign In
        </Link>
      </section>
    </div>
  );
};

export default ServiceSignUpReview;
