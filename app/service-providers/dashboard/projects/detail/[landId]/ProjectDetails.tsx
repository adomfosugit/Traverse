import { TSafeLandElement } from '../../../../../types';
import { TCompletedStage } from '../../../../../types/common';
import CompletedStage from './CompletedStage';
import LandDescriptionCard from './LandDescriptionCard';

interface IProjectDetailsProps {
  land: TSafeLandElement;
  instructions: string;
  completedStages: TCompletedStage[];
}

const ProjectDetails = ({
  land,
  instructions,
  completedStages,
}: IProjectDetailsProps) => {
  return (
    <div>
      <LandDescriptionCard land={land} />
      <div className="mt-14">
        <p className="flex text-sm text-slate-500 mb-1">
          Instructions for site visit (Optional)
        </p>
        <input
          className="bg-stone-50 text-sm border border-gray-200 rounded-md p-2 w-full"
          placeholder="Instructions"
          contentEditable={false}
          disabled
          value={instructions}
        />
      </div>
      <p className="mt-16 font-medium mb-6">Completed Stages</p>

      <CompletedStage services={land.services} />
    </div>
  );
};

export default ProjectDetails;
