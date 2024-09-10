import { format } from 'date-fns';
import { DASH_DILIGENCE_REPORT } from '../../../../../../config/constants';
import { TSafeLandElement } from '../../../../../types';
import { EServiceOptions, EServiceStatus } from '../../../../../types/common';
import { getLandStageService } from '../../../../../utils';
import Alert from '../../../../Alert';
import Header from '../../../../overview/Header';

import DescriptionMain from '../../../DescriptionMain';
import ProcessDetails from '../../../ProcessDetails';

interface IDueDiligenceProps {
  land: TSafeLandElement | null;
}

const DueDiligence = ({ land }: IDueDiligenceProps) => {
  const stage = EServiceOptions.DUE_DILIGENCE;

  const stageService = getLandStageService(land, stage);
  const stageCompleted =
    stageService?.serviceStatus === EServiceStatus.COMPLETED;
  const subText =
    'Due Diligence at the Lands Commission verifies the Government status of your land listing';

  return (
    <div className="">
      <div className="mx-10">
        <Header
          backText="Back"
          title="Lands Commission Due Diligence"
          subText={subText}
          buttonText="Continue"
          linkPath={`${DASH_DILIGENCE_REPORT}/${land?.id}`}
        />
        <Alert
          text="This stage requires Traverse working with the service providers to provide you
        with updates with 48 hours. You will receive new updates via email when available.
        Send us a message if you have any concerns "
          stageCompleted={stageCompleted}
        />
        <DescriptionMain land={land} />

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

export default DueDiligence;
