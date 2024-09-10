'use client';

import { PhotoIcon } from '@heroicons/react/24/solid';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Portfolio = () => {
  const [spin, setSpin] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles[0].name);
    setDownloadUrl(acceptedFiles[0].name);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div className="mt-10 bg-stone-50 p-10">
      <div className="flex flex-row justify-between">
        <div className="mr-6">
          <p className="font-bold text-base">Portfolio</p>
          <p className="text-sm text-gray-400 mt-2">
            Upload images of your works (3D Models and Floor Plans)
          </p>
        </div>

        <div>
          <button
            className={`bg-traverse-yellow px-4 py-2 w-40 rounded text-center h-10 mt-2`}
          >
            Upload
          </button>
        </div>
      </div>
      <div className="w-2/4 flex-col mt-9">
        <div
          {...getRootProps()}
          className="flex justify-center m-2 border-2 border-dashed rounded-lg p-8 h-32"
        >
          <input {...getInputProps()} />
          <div>
            <div className="">
              {downloadUrl === '' ? (
                <PhotoIcon className="w-9 h-9 text-center mx-auto text-slate-500" />
              ) : (
                <></>
              )}
            </div>
            {spin ? (
              <div className="flex justify-center">
                <Spin />
              </div>
            ) : (
              <span className="flex text-sm">
                <p className="text-traverse-yellow cursor-pointer">
                  {'Click to upload '}
                  {' / '}
                </p>
                <p>or drag and drop files</p>
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
      </div>
    </div>
  );
};

export const Spin = () => (
  <div className="animate-ping -ml-1 mr-3 h-5 w-5 text-indigo-500">...</div>
);
export default Portfolio;
