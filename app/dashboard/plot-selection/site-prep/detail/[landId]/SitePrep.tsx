import { format } from 'date-fns';
import { DASH_DUE_DILIGENCE } from '../../../../../../config/constants';
import { TSafeLandElement } from '../../../../../types';
import { EServiceOptions, EServiceStatus } from '../../../../../types/common';
import Header from '../../../../overview/Header';

import { getLandStageService } from '../../../../../utils';
import Alert from '../../../../Alert';
import DescriptionMain from '../../../DescriptionMain';
import ProcessDetails from '../../../ProcessDetails';

interface ISitePrepProps {
  land: TSafeLandElement | null;
}

const SitePrep = ({ land }: ISitePrepProps) => {
  const stage = EServiceOptions.SITE_PREP;

  const stageService = getLandStageService(land, stage);

  const stageCompleted =
    stageService?.serviceStatus === EServiceStatus.COMPLETED;
  const subText =
    'An interim site plan provides verified boundaries of your land listing';

  return (
    <div className="">
      <div className="mx-10">
        <Header
          backText="Back"
          title="Site Plan Preparation"
          subText={subText}
          buttonText="Continue"
          linkPath={`${DASH_DUE_DILIGENCE}/${land?.id}`}
        />
        <Alert
          text="This stage requires Traverse working with the service providers to provide you
        with updates with 48 hours. You will receive new updates via email when available.
        Send us a message if you have any concerns "
          stageCompleted={stageCompleted}
        />
        <DescriptionMain land={land} />
        {!stageCompleted && (
          <div className="flex-col mt-10 w-2/3">
            <div className="w-full">
              <textarea
                className=" w-full bg-zinc-50 border border-zinc-300 h-32 p-4"
                placeholder="Type here if you have special instructions for the site visit"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-traverse-yellow py-2 px-4 mt-3 rounded-md justify-self-end">
                Submit
              </button>
            </div>
          </div>
        )}
        <hr className=" w-2/3 my-10" />
        <div className="w-2/3">
          <ProcessDetails
            key={stageService?.id}
            doneByDate={
              stageService?.toBeCompletedOn
                ? format(new Date(stageService?.toBeCompletedOn ?? ''), 'PPPP')
                : 'N/A'
            }
            completionDate={
              stageService?.completedOn
                ? format(new Date(stageService?.completedOn ?? ''), 'PPPP')
                : 'N/A'
            }
            documents={stageService?.documents}
          />
        </div>
      </div>
    </div>
  );
};

export default SitePrep;
