'use client';
import Lottie from 'lottie-react';
import Image from 'next/image';
import checkCircle from '../srcAssets/icons/check-circle.json';
const WayYouBuild = () => {
  return (
    <div className="text-center mt-16">
      <div className="mt-20 lg:mt-32 font-semibold">
        <p className="mb-10 lg:text-3xl text-2xl">
          Revolutionizing the way you build
        </p>
        <div className="inline-grid grid-cols-1 grid-rows-8 lg:grid-rows-4 lg:grid-cols-2 w-5/6 lg:gap-y-20 lg:gap-x-8">
          <div className="my-auto text-left lg:row-start-1">
            <div
              id="remote"
              className="mt-10 font-inter font-normal text-gray-500 text-sm"
            >
              <p className="font-inter lg:text-left text-center text-xl text-black font-semibold lg:text-2xl">
                Remote Property Development
              </p>
              <p className="mt-4 text-gray-500 text-left lg:mr-20 lg:text-lg">
                The Traverse platform enables anyone around the world to
                acquire,develop and monetize real estate in Africa remotely
              </p>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Lawyers on our portal ready to handle your due diligence &
                  conveyancing.
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Certified Architects, Engineers & Construction team ready to
                  build your dream
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Make secured and seamless online payments against your project
                  schedules.
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Personalized user portal to receive regular comprehensive
                  project updates.
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Move in, or opt for Traverse to takeover property management
                  activites.
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Select your preferred land from our vetted listings in several
                  locations.
                </p>
              </div>
            </div>
          </div>
          <div className="m-auto row-start-1 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <Image
              src="/assets/illustrations/construction.svg"
              object-fit="contain"
              width="0"
              height="0"
              alt="Construction"
              title="Construction"
              className="mx-auto h-auto w-auto"
            />
          </div>
          <div className="lg:m-auto lg:row-start-2 row-start-3 mt-16 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <Image
              src="/assets/illustrations/friendship.svg"
              object-fit="contain"
              width={100}
              height={100}
              alt="Social"
              title="Social"
              className="mx-auto h-auto w-auto"
            />
          </div>
          <div className="my-auto text-left">
            <div
              id="social"
              className="mt-10 font-inter font-normal text-gray-500 text-sm"
            >
              <p className="font-inter lg:text-left text-center text-xl text-black font-semibold lg:text-2xl">
                Social PropTech
              </p>
              <p className="mt-4 text-gray-500 text-left lg:text-lg">
                Traverse&apos;s social-proptech functionality taps into social
                networks to facilitate collective residential and mixed-use real
                estate development.
              </p>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Create a virtual real estate community
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Invite your social network to start discussions on members
                  desire real estate project.
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Our design & construction team, will help you bring this
                  community to live.
                </p>
              </div>
            </div>
          </div>
          <div className="my-auto text-left">
            <div
              id="crowdsource"
              className="mt-10 font-inter font-normal text-gray-500 text-sm"
            >
              <p className="font-inter lg:text-left text-center text-xl text-black font-semibold lg:text-2xl">
                Crowdsourced Real Estate Investment
              </p>
              <p className="mt-4 text-gray-500 text-left lg:text-lg">
                Traverse brings vetted real estate opportunties to prospective
                real estate investors.
              </p>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Browse through our real estate investment opportunities.
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Raise capital (debt or equity) for your real estate project.
                </p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">
                  Investments are managed by a fund manager.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:m-auto row-start-5 lg:row-auto mt-16 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <Image
              src="/assets/illustrations/investing.svg"
              object-fit="contain"
              width="0"
              height="0"
              alt="Invest"
              title="Invest"
              className="mx-auto h-auto w-auto"
            />
          </div>
          <div className="lg:m-auto lg:row-start-4 mt-16 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <Image
              src="/assets/illustrations/travellers.svg"
              object-fit="contain"
              width="0"
              height="0"
              alt="Relocate"
              title="Relocate"
              className="mx-auto h-auto w-auto"
            />
          </div>
          <div className="my-auto text-left">
            <div
              id="relocate"
              className="mt-10 font-inter font-normal text-gray-500 text-sm"
            >
              <p className="font-inter lg:text-left text-center text-xl text-black font-semibold lg:text-2xl">
                Relocation & Resettlement
              </p>
              <p className="mt-4 text-gray-500 text-left lg:text-lg">
                Looking to relocate to Africa? There are a few things you’ll
                need to prepare before you start your adventure
              </p>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">Immigration Services</p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">Accommodation Needs</p>
              </div>
              <div className="flex items-center mt-4">
                <Lottie animationData={checkCircle} className="w-6 shrink-0" />
                <p className="ml-2 lg:text-lg">Business Related needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WayYouBuild;
