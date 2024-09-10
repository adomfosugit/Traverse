import { EyeIcon } from '@heroicons/react/24/outline';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type TDocuments = {
  id: string;
  dateSubmitted: string;
  documentName: string;
};
const Documents = () => {
  const data: TDocuments[] = [
    {
      id: '1',
      dateSubmitted: 'Wed, 11th July 2022',
      documentName: 'Site Plan Visitation Report',
    },
    {
      id: '2',
      dateSubmitted: 'Wed, 11th July 2022',
      documentName: 'Conveyance',
    },
  ];

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className=" text-gray-500 bg-gray-100 ">
            <tr>
              <th scope="col" className="px-3 py-3">
                Date submitted
              </th>
              <th scope="col" className="px-3 py-3">
                Document name
              </th>
              <th scope="col" className="px-3 py-3">
                {''}
              </th>
              <th scope="col" className="px-3 py-3">
                {''}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((document) => (
              <tr
                key={document.id}
                className="bg-white border-b  hover:bg-gray-50 "
              >
                <th
                  scope="row"
                  className="px-3 py-4 text-gray-900 whitespace-nowrap "
                >
                  {document.dateSubmitted}
                </th>
                <td className="px-3 py-4">{document.documentName}</td>
                <td className="px-3 py-4">
                  <Link
                    href="#"
                    className="inline-flex items-center hover:underline text-traverse-yellow"
                  >
                    <ArrowDownTrayIcon className="w-3 h-3" />{' '}
                    <p className="mx-3">Download</p>
                  </Link>
                </td>
                <td className="px-3 py-4 text-end">
                  <Link
                    href="#"
                    className="inline-flex items-center hover:underline hover:text-traverse-yellow text-blue-600"
                  >
                    <EyeIcon className="w-3 h-3" /> <p className="mx-3">View</p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;
