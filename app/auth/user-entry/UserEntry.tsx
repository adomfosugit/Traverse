import { AUTH_URL, SERVICE_AUTH_URL } from '../../../config/constants';
import { EEntryIconType } from '../../types/common';
import { UserEntryCard } from './user-entry-card/UserEntryCard';

const UserEntry = () => {
  return (
    <div className="flex h-screen w-screen justify-center mt-24">
      <span className="flex flex-col w-full m-3 md:w-1/2">
        <h2 className="mb-10 mx-auto font-medium">Sign Up</h2>
        <UserEntryCard
          title="Client"
          subtitle="I want to start a construction project, port a project onto Traverse, or buy property"
          icon={EEntryIconType.USER}
          urlPath={AUTH_URL}
        />
        <UserEntryCard
          title="Service provider"
          subtitle="I work in the property building industry"
          icon={EEntryIconType.SERVICE}
          urlPath={SERVICE_AUTH_URL}
        />
      </span>
    </div>
  );
};

export default UserEntry;
