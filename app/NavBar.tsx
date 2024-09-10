'use client';

import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { BellIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  FAQ_URL,
  HOME_URL,
  PROJECTS_URL,
  SERVICE_DASHBOARD_URL,
  SERVICE_PROFILE_URL,
  SERVICE_PROJECTS_URL,
} from '../config/constants';
import Avatar from './components/Avatar';
import Logo from './components/navbar/Logo';
import { EPage } from './types/common';

const NavBar = () => {
  const [isNavHidden, setIsNavHidden] = useState(true);
  const pathName = usePathname();

  const page = pathName;
  const hiddenNavPaths = [
    '/',
    '/auth',
    '/auth/sign-up',
    '/auth/user-entry',
    '/auth/service-providers',
    '/auth/service-providers/sign-in',
    '/auth/service-providers/review',
  ];
  const isHidden = hiddenNavPaths.includes(pathName ?? '/');

  const userPages = [
    EPage.HOME,
    EPage.PROJECTS,
    EPage.FAQ,
    EPage.SETTINGS,
    EPage.DASHBOARD,
    'null',
  ];

  const startString = 2;
  const pathPrefix = page && page.split('/').slice(0, startString).join('/');
  const isShowUserNav = userPages.includes(pathPrefix ?? '');

  const userNavBarMidSection = (isNavHidden: boolean) => {
    return (
      <div
        className={`md:flex ${isNavHidden ? 'hidden' : 'block'} items-center`}
        id="navbar-default"
      >
        <ul className="flex flex-wrap font-medium items-center text-center text-gray-500">
          <li className="mr-2">
            <Link
              href={HOME_URL}
              aria-current="page"
              className={`inline-block p-4 rounded-t-lg hover:underline hover:underline-offset-18 hover:decoration-3  active:text-traverse-yellow ${
                pathPrefix === EPage.HOME
                  ? 'text-traverse-yellow underline underline-offset-18 decoration-3'
                  : ''
              } `}
            >
              Home
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href={PROJECTS_URL}
              className={`inline-block p-4 rounded-t-lg hover:underline hover:underline-offset-18 hover:decoration-3  active:text-traverse-yellow ${
                pathPrefix === EPage.PROJECTS || pathPrefix === EPage.DASHBOARD
                  ? 'text-traverse-yellow underline underline-offset-18 decoration-3'
                  : ''
              } `}
            >
              Projects
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href={FAQ_URL}
              className={`inline-block p-4 rounded-t-lg hover:underline hover:underline-offset-18 hover:decoration-3  active:text-traverse-yellow ${
                pathPrefix === EPage.FAQ
                  ? 'text-traverse-yellow underline underline-offset-18 decoration-3'
                  : ''
              } `}
            >
              FAQ
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href=""
              className={`inline-block p-4 rounded-t-lg hover:underline hover:underline-offset-18 hover:decoration-3  active:text-traverse-yellow ${
                pathPrefix === EPage.SETTINGS
                  ? 'text-traverse-yellow underline underline-offset-18 decoration-3'
                  : ''
              } `}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const serviceProviderNavBarMidSection = (isNavHidden: boolean) => {
    return (
      <div
        className={`md:flex ${isNavHidden ? 'hidden' : 'block'} items-center`}
        id="navbar-default"
      >
        <ul className="flex flex-wrap text-sm font-medium text-center items-center text-gray-500">
          <li className="mr-2">
            <Link
              href={SERVICE_DASHBOARD_URL}
              aria-current="page"
              className={`inline-block p-4 rounded-t-lg hover:underline hover:underline-offset-18 hover:decoration-3  active:text-traverse-yellow ${
                page === EPage.SERVICE_HOME
                  ? 'text-traverse-yellow underline underline-offset-18 decoration-3'
                  : ''
              } `}
            >
              Home
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href={SERVICE_PROJECTS_URL}
              className={`inline-block p-4 rounded-t-lg hover:underline hover:underline-offset-18 hover:decoration-3  active:text-traverse-yellow ${
                page?.startsWith(EPage.SERVICE_PROJECTS)
                  ? 'text-traverse-yellow underline underline-offset-18 decoration-3'
                  : ''
              } `}
            >
              Projects
            </Link>
          </li>
          <li className="mr-2">
            <Link
              href={SERVICE_PROFILE_URL}
              className={`inline-block p-4 rounded-t-lg hover:underline hover:underline-offset-18 hover:decoration-3  active:text-traverse-yellow ${
                page?.startsWith(EPage.SERVICE_PROFILE)
                  ? 'text-traverse-yellow underline underline-offset-18 decoration-3'
                  : ''
              } `}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      {isHidden === true ? (
        <> </>
      ) : (
        <nav className="z-40 sticky top-0 bg-white border-gray-200 drop-shadow-md px-2 sm:px-4 py-2.5 rounded w-screen ">
          <div className="w-full flex flex-wrap justify-between px-3 md:px-10">
            <Logo />
            <Bars3BottomLeftIcon
              data-collapse-toggle="navbar-default"
              type="button"
              onClick={() => {
                setIsNavHidden(!isNavHidden);
              }}
              className="inline-flex w-10 h-10 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg \
           md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 \
            "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </Bars3BottomLeftIcon>

            {isShowUserNav
              ? userNavBarMidSection(isNavHidden)
              : serviceProviderNavBarMidSection(isNavHidden)}
            <div className="hidden flex-none w-14 md:block md:w-auto items-center">
              <span className="flex flex-row gap-3 h-full items-center">
                <ChatBubbleLeftIcon className="w-7 h-7 text-neutral-300" />
                <BellIcon className="w-7 h-7 text-neutral-300" />
                <Avatar src={''} />
                <p className="text-gray-500">Doe, John</p>
              </span>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
