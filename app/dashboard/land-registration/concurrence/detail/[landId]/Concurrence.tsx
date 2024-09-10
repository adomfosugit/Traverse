import { DASH_TITLE_APPLICATION } from '../../../../../../config/constants';
import Alert from '../../../../Alert';
import Header from '../../../../overview/Header';

import { format } from 'date-fns';
import { TSafeLandElement } from '../../../../../types';
import { EServiceOptions, EServiceStatus } from '../../../../../types/common';
import { getLandStageService } from '../../../../../utils';
import DescriptionMain from '../../../../plot-selection/DescriptionMain';
import ProcessDetails from '../../../../plot-selection/ProcessDetails';

interface IConcurrenceProps {
  land: TSafeLandElement | null;
}
const Concurrence = ({ land }: IConcurrenceProps) => {
  const subText = 'A tax paid to Government on your land transaction';

  const stage = EServiceOptions.CONCURRENCE;

  const stageService = getLandStageService(land, stage);
  const stageCompleted =
    stageService?.serviceStatus === EServiceStatus.COMPLETED;
  return (
    <div className="">
      <div className="mx-10">
        <Header
          backText="Back"
          title="Consent/Concurrence processing"
          subText={subText}
          buttonText="Continue"
          linkPath={`${DASH_TITLE_APPLICATION}/${land?.id}`}
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

export default Concurrence;
