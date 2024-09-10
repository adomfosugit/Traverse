import { AiOutlineFilePdf } from 'react-icons/ai';
import EmptyState from '../../../../components/EmptyState';
import { TSafeDocument } from '../../../../types';

interface IDocumentsProps {
  documents: TSafeDocument[];
}

const Documents = ({ documents }: IDocumentsProps) => {
  if (!documents || documents?.length < 1) {
    return (
      <EmptyState
        title="No documents found"
        subtitle="Documents will show here once uploaded"
      />
    );
  }
  return (
    <div className="h-auto w-full m-8">
      <p className="font-semibold mb-4">Documents</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-h-[50vh] overflow-y-auto">
        {documents?.map((document) => (
          <a
            key={document.id}
            download
            href={document.documentSrc}
            target="_blank"
            rel="noreferrer"
            className="mr-5 mb-5"
          >
            <AiOutlineFilePdf
              size={100}
              className="text-rose-500 hover:border hover:border-traverse-yellow"
            />
            <p className="text-light text-neutral-700 text-sm">
              {document.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Documents;
