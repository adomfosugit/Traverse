'use client';
import { DASH_CONVEYANCE } from '../../../../../../config/constants';
import Alert from '../../../../Alert';
import Header from '../../../../overview/Header';

import { format } from 'date-fns';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { TSafeLandElement } from '../../../../../types';
import { EServiceOptions, EServiceStatus } from '../../../../../types/common';
import { getLandStageService } from '../../../../../utils';
import DescriptionMain from '../../../../plot-selection/DescriptionMain';
import ProcessDetails from '../../../../plot-selection/ProcessDetails';

interface ISaleAgreementProps {
  land: TSafeLandElement | null;
}

const SaleAgreement = ({ land }: ISaleAgreementProps) => {
  const subText =
    'The S&PA outlines the terms of the transaction between you and the seller. The S&PA requires your signature and the signature of a witness';

  const stage = EServiceOptions.PURCHASE_AGREEMENT;

  const stageService = getLandStageService(land, stage);
  const stageCompleted =
    stageService?.serviceStatus === EServiceStatus.COMPLETED;

  const [spin, setSpin] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setDownloadUrl(acceptedFiles[0].name);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div className="">
      <div className="mx-10">
        <Header
          backText="Back"
          title="Sales & Purchase Agreement"
          subText={subText}
          buttonText="Continue"
          linkPath={`${DASH_CONVEYANCE}/${land?.id}`}
        />
        <Alert
          text="This stage requires Traverse working with the service providers to provide you
        with updates with 48 hours. You will receive new updates via email when available.
        Send us a message if you have any concerns "
          stageCompleted={stageCompleted}
        />
        <DescriptionMain land={land} />

        <hr className=" w-full my-10" />
        <div className="flex justify-between">
          <div className="w-3/5">
            <ProcessDetails
              key={stageService?.id}
              doneByDate={
                stageService?.toBeCompletedOn
                  ? format(
                      new Date(stageService?.toBeCompletedOn ?? ''),
                      'PPPP'
                    )
                  : 'N/A'
              }
              completionDate={
                stageService?.completedOn
                  ? format(new Date(stageService?.completedOn ?? ''), 'PPPP')
                  : 'N/A'
              }
              documents={stageService?.documents}
            />
          </div>
          <div className="w-1/4 flex-col">
            <p className="mb-2 text-slate-500 text-sm">
              Upload Signed Document
            </p>

            <div
              {...getRootProps()}
              className="flex justify-center m-2 border-2 rounded-lg p-4 "
            >
              <input {...getInputProps()} />
              <div>
                <div className="">
                  {downloadUrl === '' ? <UploadIcon /> : <></>}
                </div>
                {spin ? (
                  <div className="flex justify-center">
                    <Spin />
                  </div>
                ) : (
                  <span className="flex text-sm">
                    <p className="text-traverse-yellow">{'Click to upload '}</p>
                    <p>/ or drag and drop files</p>
                  </span>
                )}
                {downloadUrl === '' ? (
                  <></>
                ) : (
                  <div>
                    <div className="my-3">
                      <iframe
                        src={downloadUrl}
                        frameBorder="0"
                        allowFullScreen
                        height={'200'}
                        width={'250'}
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="">
              <input
                placeholder="fileName"
                disabled
                className="bg-slate-50 border slate-100 w-full text-gray-500 m-2 p-2"
                value={downloadUrl}
              />
            </div>
            <button className="bg-traverse-yellow w-full py-2 rounded-md my-7">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Spin = () => (
  <div className="animate-ping -ml-1 mr-3 h-5 w-5 text-indigo-500">...</div>
);
export const UploadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
  </svg>
);

export default SaleAgreement;
