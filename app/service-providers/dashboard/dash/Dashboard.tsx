'use client';

import { StarIcon } from '@heroicons/react/24/solid';
import useLandModal from '../../../hooks/useLandModal';
import { TSafeLand, TSafeUser } from '../../../types';
import { EBrokerProfession } from '../../../types/common';
import Header from '../Header';
import Header2 from '../Header2';
import AggregateCard from './AggregateCard';
import LandTable from './LandTable';
import { default as ServiceTable } from './ServiceTable';

interface IDashboardProps {
  currentUser: TSafeUser | null;
  brokerLands?: TSafeLand[] | null;
  brokerProfession?: string;
}

const Dashboard = ({
  currentUser,
  brokerLands,
  brokerProfession,
}: IDashboardProps) => {
  const landModal = useLandModal();

  const landCards = [
    {
      id: '1',
      number: '0',
      description: 'Total no. of lands',
    },
    {
      id: '2',
      number: '0',
      description: 'Offers available',
    },
    {
      id: '3',
      number: '0',
      description: 'Sold lands',
    },
    {
      id: '4',
      number: '0.0',
      numberDescription: '$',
      description: 'Amount earned',
    },

    {
      id: '5',
      description: 'Rating',
      icon: <StarIcon className="text-traverse-yellow w-7 h-7" />,
    },
  ];

  const cards = [
    {
      id: '1',
      number: '0',
      description: 'Total no. of projects',
    },
    {
      id: '2',
      number: '0',
      description: 'Ongoing projects',
    },
    {
      id: '3',
      number: '0',
      description: 'Completed projects',
    },
    {
      id: '4',
      number: '0.0',
      numberDescription: 'GHS',
      description: 'Amount earned',
    },

    {
      id: '5',
      description: 'Rating',
      icon: <StarIcon className="text-traverse-yellow w-7 h-7" />,
    },
  ];

  const landOwnerContent = (
    <div>
      <Header2
        title="Home"
        subText="Your dashboard with information about your work with Traverse"
        buttonText="Upload land"
        buttonAction={landModal.onOpen}
      />
      <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4">
        {landCards.map((card) => (
          <AggregateCard
            key={card.id}
            number={card.number}
            numberDescription={card.numberDescription}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
      <LandTable lands={brokerLands} />
    </div>
  );

  const serviceProviderContent = (
    <div>
      <Header
        title="Home"
        subText="Your dashboard with information about your work with Traverse"
      />
      <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4">
        {cards.map((card) => (
          <AggregateCard
            key={card.id}
            number={card.number}
            numberDescription={card.numberDescription}
            icon={card.icon}
            description={card.description}
          />
        ))}
      </div>
      <ServiceTable lands={brokerLands} />
    </div>
  );

  if (brokerProfession === EBrokerProfession.LAND_BROKER) {
    return landOwnerContent;
  } else {
    return serviceProviderContent;
  }
};

export default Dashboard;
