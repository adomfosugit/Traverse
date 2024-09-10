import { AiOutlineFilePdf } from 'react-icons/ai';
import EmptyState from '../../../../../components/EmptyState';
import { TSafeDocument } from '../../../../../types';

type TDocument = {
  id: string;
  title: string;
  path: string;
};

const document: TDocument[] = [
  {
    id: '1',
    title: 'Dummy 1',
    path: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '2',
    title: 'Dummy 2',
    path: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '3',
    title: 'Dummy 3',
    path: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '4',
    title: 'Dummy 4',
    path: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: '5',
    title: 'Dummy 5',
    path: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
];
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
      <div className="flex flex-wrap">
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
            <p className="text-light text-neutral-700">{document.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Documents;
