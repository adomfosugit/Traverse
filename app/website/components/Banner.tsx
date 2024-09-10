import Link from 'next/link';
import Header from './Header';

const Banner = () => {
  return (
    <div className=" bg-[url('/assets/images/banner.svg')] bg-cover h-full">
      <div className="bg-black bg-opacity-50 pb-11">
        <Header />
        <div className="lg:ml-32 -mt-10">
          {/* {banner content} */}
          <div className="lg:flex lg:justify-between">
            {/* {left text} */}
            <div className="text-white font-inter lg:mt-36 lg:w-2/4 mx-6">
              <p className="text-4xl lg:text-5xl font-bold font-inter lg:mt-10 mr-10">
                Build Remotely • Build Together • Build in Africa
              </p>
              <p className="text-xl mt-10 lg:text-3xl lg:mt-16">
                Fully remote, collaborative, end-to-end, property acquisition,
                development & monetization.
              </p>
              <p className="text-xl mt-10 lg:mt-16 lg:text-3xl">
                Live Global • Build Back Home.
              </p>
              {/* <div className="flex w-screen mx-auto mt-10 h-10 bg-yellow-400 text-black items-center justify-center lg:w-40 rounded-md lg:h-16 lg:text-lg lg:mt-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"> */}
              <Link
                className="flex mt-10 h-10 bg-yellow-400 items-center text-black justify-center lg:w-40 rounded-md lg:h-16 lg:text-xl lg:mt-16 mx-auto lg:ml-1 cursor-pointer"
                href="/auth/user-entry"
              >
                Get started
              </Link>
            </div>
            {/* {form} */}
            <div className="flex flex-col bg-white lg:p-8 rounded-md mt-10 mx-6 lg:w-[494px] lg:h-[594px] lg:mt-32 text-sm lg:mb-48 lg:mr-32">
              <p className="mx-auto mb-8 text-xl lg:text-2xl font-semibold p-8 lg:p-1">
                Start Your Traverse!
              </p>
              <div className="form ml-5 mr-5 font-inter">
                <p className="text-sm">Preferred service</p>
                <select
                  className="bg-gray-100 w-full h-12 mt-2 mb-2 p-2 lg:h-12 lg:p-2 lg:mb-5 rounded-md"
                  title="region"
                  placeholder="Social PropTech"
                >
                  <option>Remote Property Development</option>
                  <option>Social PropTech</option>
                  <option>Real Estate Investment</option>
                  <option>Relocation and Resettlement</option>
                </select>
                <p className="text-sm">Desired Country</p>
                <select
                  className="bg-gray-100 w-full h-12 mt-2 mb-2 p-2 lg:h-12 lg:p-2 lg:mb-5 rounded-md"
                  title="region"
                  placeholder="Ghana"
                >
                  <option>Ghana</option>
                  <option>Nigeria</option>
                  <option>Kenya</option>
                  <option>Senegal</option>
                </select>
                <p className="text-sm">Email</p>
                <input
                  className="bg-gray-100 w-full h-12 mt-2 mb-2 p-2 lg:h-12 lg:p-2 lg:mb-5 rounded-md"
                  placeholder="johndoe@somemail.com"
                />
                <p className="text-sm">Contact Number</p>
                <div>
                  <input
                    type="tel"
                    className="bg-gray-100 w-full h-12 mt-2 mb-2 p-2 lg:h-12 lg:p-2 lg:mb-5 rounded-md"
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  />
                </div>
                <div className="flex mt-6 mb-8 h-14 bg-yellow-400 bg-opacity-90 text-black items-center justify-center rounded-md lg:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                  <p>Keep me updated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
