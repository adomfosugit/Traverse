import getBrokerLands from '../../actions/getBrokerLands';
import getCurrentUser from '../../actions/getCurrentUser';
import getLands from '../../actions/getLands';
import Dashboard from './dash/Dashboard';

const ServiceProviders = async () => {
  const currentUser = await getCurrentUser();
  const serviceProviderProfession = currentUser?.serviceProvider?.profession;
  const isLandOwner = serviceProviderProfession === 'Land broker';

  let brokerLands, providerProjects;
  if (isLandOwner) {
    brokerLands = await getBrokerLands();
  } else {
    brokerLands = await getLands();
  }

  return (
    <div className="w-full min-h-screen">
      <Dashboard
        currentUser={currentUser}
        brokerLands={brokerLands}
        brokerProfession={currentUser?.serviceProvider.profession}
      />
    </div>
  );
};

export default ServiceProviders;
