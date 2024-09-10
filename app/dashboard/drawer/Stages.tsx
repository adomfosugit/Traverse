import { ReactElement } from 'react';
import StageIcon from './StageIcon';

export type TDrawerStage = {
  id: string;
  title: string;
  path: string;
  icon: ReactElement;
  iconDone: ReactElement;
  subNavigation: {
    title: string;
    path: string;
  }[];
};

export const landPurchaseStages: TDrawerStage[] = [
  {
    id: '1',
    title: 'Pre-purchase Stage',
    path: '',
    icon: <StageIcon iconNumber="1" />,
    iconDone: <StageIcon iconNumber="1" />,
    subNavigation: [
      {
        title: 'Building Questionnaire',
        path: '',
      },
      {
        title: 'Architectural Drawings & Designs',
        path: '',
      },
      {
        title: 'Payment for Designs',
        path: '',
      },
      {
        title: 'Finishing Questionnaire',
        path: '',
      },
      {
        title: 'Project Cost',
        path: '',
      },
      {
        title: 'Building Permit Application Fee Payment',
        path: '',
      },
      {
        title: 'Building Permit Application Invoice',
        path: '',
      },
      {
        title: 'Actual Building Permit Payment',
        path: '',
      },
      {
        title: 'Building Permit Issuance',
        path: '',
      },
    ],
  },
  {
    id: '2',
    title: 'Purchase Stage',
    path: '',
    icon: <StageIcon iconNumber="2" />,
    iconDone: <StageIcon iconNumber="2" />,
    subNavigation: [
      {
        title: 'Site Visit',
        path: '',
      },
      {
        title: 'Site Plan Preparation',
        path: '',
      },
    ],
  },
  {
    id: '3',
    title: 'Land Registration Stage',
    path: '',
    icon: <StageIcon iconNumber="3" />,
    iconDone: <StageIcon iconNumber="2" />,
    subNavigation: [
      {
        title: 'Land selection',
        path: '',
      },
      {
        title: 'Pay Pre- Purchase Stage Fees',
        path: '',
      },
    ],
  },
];

export const buildingStages: TDrawerStage[] = [
  {
    id: '4',
    title: 'Pre-Contract Stage',
    path: '',
    icon: <StageIcon iconNumber="1" />,
    iconDone: <StageIcon iconNumber="2" />,
    subNavigation: [
      {
        title: 'Land selection',
        path: '',
      },
      {
        title: 'Pay Pre- Purchase Stage Fees',
        path: '',
      },
      {
        title: 'Site Visit',
        path: '',
      },
      {
        title: 'Site Plan Preparation',
        path: '',
      },
      {
        title: 'Lands Commission Due Diligence',
        path: '',
      },
      {
        title: 'Due Diligence Report & Legal Advise',
        path: '',
      },
      {
        title: 'Final Site Plan Preparation',
        path: '',
      },
    ],
  },
  {
    id: '5',
    title: 'Superstructure',
    path: '',
    icon: <StageIcon iconNumber="2" />,
    iconDone: <StageIcon iconNumber="2" />,
    subNavigation: [
      {
        title: 'Site Visit',
        path: '',
      },
      {
        title: 'Site Plan Preparation',
        path: '',
      },
    ],
  },
  {
    id: '6',
    title: 'Finishing',
    path: '',
    icon: <StageIcon iconNumber="3" />,
    iconDone: <StageIcon iconNumber="2" />,
    subNavigation: [
      {
        title: 'Land selection',
        path: '',
      },
      {
        title: 'Pay Pre- Purchase Stage Fees',
        path: '',
      },
    ],
  },
  {
    id: '7',
    title: 'Furnishing',
    path: '',
    icon: <StageIcon iconNumber="4" />,
    iconDone: <StageIcon iconNumber="2" />,
    subNavigation: [
      {
        title: 'Land selection',
        path: '',
      },
      {
        title: 'Pay Pre- Purchase Stage Fees',
        path: '',
      },
    ],
  },
];
