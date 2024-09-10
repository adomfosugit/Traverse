import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import EmptyState from '../../../../../components/EmptyState';
import { TSafeService } from '../../../../../types';

interface ICompletedStageProps {
  services: TSafeService[];
}
const CompletedStage = ({ services }: ICompletedStageProps) => {
  if (!services?.length) {
    return (
      <EmptyState
        title="No services completed at the moment!"
        subtitle="Services will be displayed once a service provider submits a service"
      />
    );
  }

  return (
    <div>
      {services?.map((service) => (
        <div key={service.id} className="bg-stone-50 px-10 py-8">
          <p className="text-slate-600">{service.serviceProvided}</p>
          <p className="text-gray-600 text-sm mt-2">
            {format(new Date(service?.createdAt), 'dd/LL/yyyy hh:mm a')}
          </p>
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-x-8 mt-8">
            <div className="">
              <p className="flex text-sm text-slate-500 mb-1">
                To be completed by
              </p>
              <input
                className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
                placeholder="Date"
                disabled
                value={format(new Date(service?.toBeCompletedOn), 'PPPP')}
              />
            </div>
            <div className="">
              <p className="flex text-sm text-slate-500 mb-1">Completed on</p>
              <input
                className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
                placeholder="Date"
                disabled
                value={format(new Date(service?.completedOn), 'PPPP')}
              />
            </div>
            <div className="">
              <p className="flex text-sm text-slate-500 mb-1">Uploaded Files</p>
              {service.documents.map((document) => (
                <div
                  key={document.documentSrc}
                  className="flex bg-zinc-100 p-3 mb-3"
                >
                  <div>
                    <p className="mr-auto text-sm">{document.title}</p>
                    <a
                      key={document.documentSrc}
                      download
                      href={document.documentSrc}
                      target="_blank"
                      rel="noreferrer"
                      className="flex"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4 mr-1 text-traverse-yellow" />
                      <p className="text-traverse-yellow text-sm">Download</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <p className="flex text-sm text-slate-500 mb-1">
                Uploaded Images
              </p>
              {service.images.map((image) => (
                <div
                  key={image.imageSrc}
                  className="flex bg-zinc-100 p-3 w-full mb-3"
                >
                  <p className="mr-auto text-sm">{image.title}</p>
                  <a
                    key={image.imageSrc}
                    download
                    href={image.imageSrc}
                    target="_blank"
                    rel="noreferrer"
                    className="flex"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4 mr-1 text-traverse-yellow" />
                    <p className="text-traverse-yellow text-sm">Download</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedStage;
