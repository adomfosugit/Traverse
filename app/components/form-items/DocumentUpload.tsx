'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useCallback, useMemo } from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

declare global {
  var cloudinary: any;
}

interface IDocumentUploadProps {
  onChange: (value: string[]) => void;
  value: string[];
}

const DocumentUpload = ({ value, onChange }: IDocumentUploadProps) => {
  const documentArray: string[] = useMemo(() => [], []);

  const handleUpload = useCallback(
    (result: any) => {
      documentArray.push(result.info.secure_url);
      onChange(documentArray);
    },
    [onChange, documentArray]
  );
  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="traverse_docs"
      options={{
        maxFiles: 3,
      }}
    >
      {({ open }) => {
        return (
          <div
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-400"
            onClick={() => open?.()}
          >
            <AiOutlineFilePdf size={50} />
            {value?.length < 0 && (
              <div className="font-semibold text-lg">Click to upload</div>
            )}
            <div className="absolute inset-0 w-full h-full grid grid-flow-col gap-2">
              {value?.length > 0 &&
                value.map((document, index) => (
                  <AiOutlineFilePdf key={index} className="w-36 h-48" />
                ))}
            </div>
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default DocumentUpload;
