'use client';
import { format } from 'date-fns';
import { useState } from 'react';
import { DUMMY_PDF_URL } from '../../../../../../config/constants';
import { TSafeLandElement, TSafeUser } from '../../../../../types';
import { ETab, TCompletedStage } from '../../../../../types/common';
import Header from '../../Header';
import ProjectDetails from './ProjectDetails';
import Submission from './Submission';
import TabBar from './TabBar';

interface IDetailProps {
  land: TSafeLandElement;
  currentUser?: TSafeUser | null;
  userBidStatus?: boolean;
}
const Detail = ({ land, currentUser }: IDetailProps) => {
  const instructions = 'Please look out for water retainment in the area';

  const completedStages: TCompletedStage[] = [
    {
      title: 'Site plan',
      date: 'Submitted on Tuesday, 12th July 2022',
      toBeCompleted: '',
      completedOn: '',
      uploadedFiles: [
        { name: 'file.pdf', path: DUMMY_PDF_URL },
        { name: 'file.pdf', path: DUMMY_PDF_URL },
      ],
      uploadedImages: [
        { name: 'file.pdf', path: DUMMY_PDF_URL },
        { name: 'file.pdf', path: DUMMY_PDF_URL },
      ],
    },
  ];

  const [tab, setTab] = useState(ETab.DETAILS);

  const currentTab = tab;
  return (
    <div>
      <Header
        backText="Back"
        title={land.title}
        subText={land.address}
        projectId={`Land ID: ${land.id}`}
        time={`Created on: ${format(
          new Date(land?.createdAt),
          'dd/LL/yyyy hh:mm a'
        )}`}
      />
      <TabBar currentTab={currentTab} setTab={setTab} />
      {tab === ETab.DETAILS ? (
        <ProjectDetails
          land={land}
          instructions={instructions}
          completedStages={completedStages}
        />
      ) : (
        <Submission land={land} currentUser={currentUser} />
      )}
    </div>
  );
};

export default Detail;
