import { EyeIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { SERVICE_PROJECTS_DETAIL_URL } from '../../../../config/constants';
import { TSafeLand } from '../../../types';
import TableNav from './TableNav';

interface IServiceTableProps {
  lands?: TSafeLand[] | null;
}
const ServiceTable = ({ lands }: IServiceTableProps) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Recent Activities
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {lands?.map((land) => (
              <tr
                key={land?.title}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{land?.title}</td>
                <td className="px-6 py-4">{land?.category}</td>
                <td className="px-6 py-4">{land?.landArea} </td>
                <td className="px-6 py-4">
                  {format(new Date(land?.createdAt), 'dd/LL/yyyy hh:mm a')}
                </td>
                <td className="px-6 py-4 flex text-blue-600 hover:underline">
                  <EyeIcon className="w-4 h-4 my-auto mr-2" />{' '}
                  <a
                    href={`${SERVICE_PROJECTS_DETAIL_URL}/${land.id}`}
                    className="font-medium "
                  >
                    View land
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableNav />
      </div>
    </div>
  );
};

export default ServiceTable;
