'use client';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const smoothScroll = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const elementId = document.getElementById(id);
    const headerOffset = 70;
    const elementPosition =
      (elementId && elementId.getBoundingClientRect().top) ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    elementId &&
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
  };

  const smoothScrollAndClose = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const elementId = document.getElementById(id);
    const headerOffset = 70;
    const elementPosition =
      (elementId && elementId.getBoundingClientRect().top) ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    elementId &&
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between">
      {/* left */}
      <div className="relative items-start flex h-40 cursor-pointer ml-6 lg:ml-32 mt-4">
        <img
          src="/assets/icons/logo_text.svg"
          className="h-28 w-28 flex-shrink-0"
          alt="logo"
        />
      </div>

      {/* right - Search*/}

      <div className="hidden mt-5 lg:flex space-x-4 justify-items-end items-center text-white mr-16 lg:-mt-10 lg:mr-32">
        <a
          href="#whoWeAre"
          onClick={(event) => smoothScroll(event, 'whoWeAre')}
          className="cursor-pointer py-2 transition ease-in-out delay-150 hover:font-bold"
        >
          About Us
        </a>
        <a
          href="#remote"
          onClick={(event) => smoothScroll(event, 'remote')}
          className="cursor-pointer py-2 transition ease-in-out delay-150 hover:font-bold duration-300"
        >
          Remote Property
        </a>
        <Link
          href="#social"
          onClick={(event) => smoothScroll(event, 'social')}
          className="cursor-pointer py-2 transition ease-in-out delay-150 hover:font-bold  duration-300"
        >
          Social PropTech
        </Link>
        <Link
          href="#crowdsource"
          onClick={(event) => smoothScroll(event, 'crowdsource')}
          className="cursor-pointer py-2 transition ease-in-out delay-150 hover:font-bold  duration-300"
        >
          Investments
        </Link>
        <Link
          href="#relocate"
          onClick={(event) => smoothScroll(event, 'relocate')}
          className="cursor-pointer py-2 transition ease-in-out delay-150 hover:font-bold  duration-300"
        >
          Relocation
        </Link>
        <Link
          href="#faq"
          onClick={(event) => smoothScroll(event, 'faq')}
          className="cursor-pointer py-2 transition ease-in-out delay-150 hover:font-bold  duration-300"
        >
          FAQ
        </Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden inline-flex items-center justify-center p-8 rounded-md text-white focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white font-inter"
      >
        <span className="sr-only">Open main menu</span>
        {!isOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http:www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http:www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden w-screen z-10">
            <div
              ref={ref}
              className="bg-black bg-opacity-90 text-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              <a
                className="block px-3 py-2 rounded-md text-base font-inter"
                href="whoWeAre"
                onClick={(event) => smoothScrollAndClose(event, 'whoWeAre')}
              >
                About Us
              </a>
              <a
                className="block px-3 py-2 rounded-md text-base font-inter"
                href="remote"
                onClick={(event) => smoothScrollAndClose(event, 'remote')}
              >
                Remote Property
              </a>
              <a
                className="block px-3 py-2 rounded-md text-base font-inter"
                href="social"
                onClick={(event) => smoothScrollAndClose(event, 'social')}
              >
                Social PropTech
              </a>
              <a
                className="block px-3 py-2 rounded-md text-base font-inter"
                href="crowdsource"
                onClick={(event) => smoothScrollAndClose(event, 'crowdsource')}
              >
                Investments
              </a>
              <a
                className="block px-3 py-2 rounded-md text-base font-inter"
                href="relocate"
                onClick={(event) => smoothScrollAndClose(event, 'relocate')}
              >
                Relocation
              </a>
              <a
                className="block px-3 py-2 rounded-md text-base font-inter"
                href="#faq"
                onClick={(event) => smoothScrollAndClose(event, 'faq')}
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
};

export default Header;
