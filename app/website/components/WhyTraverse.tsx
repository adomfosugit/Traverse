import Image from 'next/image';

const WhyTraverse = () => {
  return (
    <div className="text-center justify-center place-items-center bg-slate-50">
      <div className="font-semibold py-12">
        <p className="mb-10 lg:p-12 lg:text-3xl text-2xl">
          Why Traverse is meant for you
        </p>
        <div className="lg:pb-20 inline-grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 w-5/6 gap-y-6 gap-x-6">
          <div className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300">
            <Image
              src="/assets/illustrations/digital-nomad.svg"
              object-fit="contain"
              width="0"
              height="0"
              alt="Convenience"
              title="Convenience"
              className="mx-auto w-auto h-auto"
            />
            <div className="mt-10">
              <p className="font-inter lg:text-2xl">Convenience</p>
              <p className="mt-4 text-gray-500 font-roboto font-normal lg:text-lg">
                100% Digital, track all progress in real-time, accessible online
                anytime
              </p>
            </div>
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300">
            <Image
              src="/assets/illustrations/business-deal.svg"
              object-fit="contain"
              width="0"
              height="0"
              alt="Personalized Experience"
              title="Personalized Experience"
              className="mx-auto w-auto h-auto"
            />
            <div className="mt-10" />
            <p className="font-inter lg:text-2xl">Personalized Experience</p>
            <p className="mt-4 text-gray-500 font-roboto font-normal lg:text-lg">
              Select from a wide section of local & International architects
            </p>
            <span />
          </div>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300">
            <Image
              src="/assets/illustrations/house-search.svg"
              object-fit="contain"
              width="0"
              height="0"
              alt="Capital Security"
              title="Capital Security"
              className="mx-auto w-auto h-auto"
            />
            <div className="mt-10 mx-auto" />
            <p className="font-inter lg:text-2xl">Capital Security</p>
            <p className="mt-4 text-gray-500 font-roboto font-normal lg:text-lg">
              4 levels of capital protection: escrow, direct disbursements,
              project charters & redundant contractors
            </p>
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTraverse;
