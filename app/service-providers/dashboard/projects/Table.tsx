import { EyeIcon } from '@heroicons/react/24/outline';
import { SERVICE_PROJECTS_DETAIL_URL } from '../../../../config/constants';
import Badge from '../../../Badge';
import { EBadgeStatus } from '../../../types/common';
import TableNav from './TableNav';

const Table = () => {
  const projects = [
    {
      time: 'Today 12:23 PM',
      projectID: '00001',
      action: 'Final Site Plan',
      status: EBadgeStatus.ERROR,
      description: 'Visit the site location to inspect and make a report',
    },
    {
      time: 'Today 12:23 PM',
      projectID: '00002',
      action: 'Site visit',
      status: EBadgeStatus.ERROR,
      description: 'Visit the site location to inspect and make a report',
    },
    ,
    {
      time: 'Today 12:23 PM',
      projectID: '00003',
      action: 'Site Plan Preparation',
      status: EBadgeStatus.COMPLETED,
      description: 'Prepare a site plan after the site visit',
    },
  ];
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date/Time
              </th>
              <th scope="col" className="px-6 py-3">
                Project ID
              </th>
              <th scope="col" className="px-6 py-3">
                Current Stage
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project?.projectID}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{project?.time}</td>
                <td className="px-6 py-4">{project?.projectID}</td>
                <td className="px-6 py-4">{project?.action}</td>
                <td className="px-6 py-4">{project?.description}</td>
                <td className="px-6 py-4">
                  <Badge status={project?.status ?? EBadgeStatus.NA} />
                </td>
                <td className="px-6 py-4 flex text-blue-600 hover:underline">
                  <EyeIcon className="w-4 h-4 my-auto mr-2" />{' '}
                  <a
                    href={SERVICE_PROJECTS_DETAIL_URL}
                    className="font-medium "
                  >
                    View details
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

export default Table;
