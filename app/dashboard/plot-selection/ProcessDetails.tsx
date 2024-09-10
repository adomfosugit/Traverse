import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { TSafeDocument } from '../../types';

interface IProcessDetailsProps {
  doneByDate: string;
  completionDate: string;
  documents?: TSafeDocument[];
}
const ProcessDetails = ({
  doneByDate,
  completionDate,
  documents,
}: IProcessDetailsProps) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex-col">
        <p className="mb-2 text-slate-500 text-sm">To be done by</p>
        <p className="text-sm">{doneByDate}</p>
      </div>
      <div className="flex-col">
        <p className="mb-2 text-slate-500 text-sm">Actual completion date</p>
        <p className="text-sm">{completionDate}</p>
      </div>
      <div className="flex-col">
        <p className="mb-2 text-slate-500 text-sm">Document(s) submitted</p>
        {documents?.map((document) => (
          <div key={document.id} className="flex">
            <p>{document.title}</p>
            <a
              key={document.documentSrc}
              download
              href={document.documentSrc}
              target="_blank"
              rel="noreferrer"
              className="mr-5 ml-5 mb-5 flex"
            >
              <ArrowDownTrayIcon className="w-4 h-4 mr-2 text-traverse-yellow" />
              <p className="text-traverse-yellow text-sm">Download</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessDetails;
