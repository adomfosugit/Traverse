'use client';

import { PhotoIcon } from '@heroicons/react/24/solid';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const UploadSection = () => {
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
    <div className="mt-10 bg-stone-50">
      <div className="flex-col">
        <div
          {...getRootProps()}
          className="flex justify-center m-2 border-2 border-dashed rounded-lg p-8 h-32 w-full xl:w-2/3"
        >
          <input {...getInputProps()} />
          <div>
            <div className="">
              <PhotoIcon className="w-9 h-9 text-center mx-auto text-slate-500" />
            </div>
            {spin ? (
              <div className="flex justify-center">
                <Spin />
              </div>
            ) : (
              <span className="flex text-sm">
                <p className="text-traverse-yellow cursor-pointer">
                  {'Click to upload or drag and drop files'}
                </p>
              </span>
            )}
          </div>
        </div>
        {downloadUrl === '' ? (
          <></>
        ) : (
          <div
            key={downloadUrl}
            className="flex bg-zinc-100 p-2 w-full xl:w-2/3"
          >
            <p className="mr-auto text-sm text-slate-500">{downloadUrl}</p>
            <button className="text-red-600 text-sm">Remove</button>
          </div>
        )}
      </div>
    </div>
  );
};

export const Spin = () => (
  <div className="animate-ping -ml-1 mr-3 h-5 w-5 text-indigo-500">...</div>
);
export default UploadSection;
