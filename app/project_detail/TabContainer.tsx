'use client';

import { useState } from 'react';
import { EProjectTab } from '../types/common';
import Documents from './Documents';
import Gallery from './Gallery';
import Negotiations from './Negotiations';
import Recent from './Recent';
import Transactions from './Transactions';

const TabContainer = () => {
  const [currentTab, setCurrentTab] = useState(EProjectTab.RECENT);
  return (
    <div className="mt-16">
      <div className="mb-4 border-b border-gray-200">
        <ul
          className="flex flex-wrap -mb-px text-base text-gray-500"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg  hover:text-traverse-yellow hover:border-traverse-yellow ${
                currentTab === EProjectTab.RECENT
                  ? 'text-traverse-yellow border-traverse-yellow border-b-4'
                  : ''
              } `}
              id="recent-tab"
              data-tabs-target="#recent"
              type="button"
              role="tab"
              aria-controls="recent"
              aria-selected="false"
              onClick={() => {
                setCurrentTab(EProjectTab.RECENT);
              }}
            >
              Recent Activities
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg  hover:text-traverse-yellow hover:border-traverse-yellow ${
                currentTab === EProjectTab.TRANSACTION
                  ? 'text-traverse-yellow border-traverse-yellow border-b-4'
                  : ''
              } `}
              id="transactions-tab"
              data-tabs-target="#transactions"
              type="button"
              role="tab"
              aria-controls="transactions"
              aria-selected="false"
              onClick={() => {
                setCurrentTab(EProjectTab.TRANSACTION);
              }}
            >
              Transactions
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg  hover:text-traverse-yellow hover:border-traverse-yellow ${
                currentTab === EProjectTab.DOCUMENT
                  ? 'text-traverse-yellow border-traverse-yellow border-b-4'
                  : ''
              } `}
              id="documents-tab"
              data-tabs-target="#documents"
              type="button"
              role="tab"
              aria-controls="documents"
              aria-selected="false"
              onClick={() => {
                setCurrentTab(EProjectTab.DOCUMENT);
              }}
            >
              Documents
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4 rounded-t-lg  hover:text-traverse-yellow hover:border-traverse-yellow ${
                currentTab === EProjectTab.GALLERY
                  ? 'text-traverse-yellow border-traverse-yellow border-b-4'
                  : ''
              } `}
              id="gallery-tab"
              data-tabs-target="#gallery"
              type="button"
              role="tab"
              aria-controls="gallery"
              aria-selected="false"
              onClick={() => {
                setCurrentTab(EProjectTab.GALLERY);
              }}
            >
              Gallery
            </button>
          </li>
          <li role="presentation">
            <button
              className={`inline-block p-4  rounded-t-lg  hover:text-traverse-yellow hover:border-traverse-yellow ${
                currentTab === EProjectTab.NEGOTIATE
                  ? 'text-traverse-yellow border-traverse-yellow border-b-4'
                  : ''
              } `}
              id="negotiations-tab"
              data-tabs-target="#negotiations"
              type="button"
              role="tab"
              aria-controls="negotiations"
              aria-selected="false"
              onClick={() => {
                setCurrentTab(EProjectTab.NEGOTIATE);
              }}
            >
              Negotiations
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className={`p-10 rounded-lg bg-gray-50 ${
            currentTab === EProjectTab.RECENT ? '' : 'hidden'
          }`}
          id="recent"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Recent />
        </div>
        <div
          className={`p-10 rounded-lg bg-gray-50 ${
            currentTab === EProjectTab.TRANSACTION ? '' : 'hidden'
          }`}
          id="transactions"
          role="tabpanel"
          aria-labelledby="transactions-tab"
        >
          <Transactions />
        </div>
        <div
          className={`p-10 rounded-lg bg-gray-50 ${
            currentTab === EProjectTab.DOCUMENT ? '' : 'hidden'
          }`}
          id="documents"
          role="tabpanel"
          aria-labelledby="documents-tab"
        >
          <Documents />
        </div>
        <div
          className={`rounded-lg  ${
            currentTab === EProjectTab.GALLERY ? '' : 'hidden'
          }`}
          id="gallery"
          role="tabpanel"
          aria-labelledby="gallery-tab"
        >
          <Gallery />
        </div>
        <div
          className={`p-10 rounded-lg bg-gray-50 ${
            currentTab === EProjectTab.NEGOTIATE ? '' : 'hidden'
          }`}
          id="negotiations"
          role="tabpanel"
          aria-labelledby="negotiations-tab"
        >
          <Negotiations />
        </div>
      </div>
    </div>
  );
};

export default TabContainer;
