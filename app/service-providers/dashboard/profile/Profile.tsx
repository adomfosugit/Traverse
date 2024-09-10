import Header from '../Header';
import PaymentInfo from './PaymentInfo';
import PersonalInfoForm from './PersonalInfoForm';
import Portfolio from './Potfolio';

const Profile = () => {
  return (
    <div>
      <Header
        title="Profile"
        subText="Edit and Update your profile with accurate information"
      />
      <PersonalInfoForm />
      <Portfolio />
      <PaymentInfo />
    </div>
  );
};

export default Profile;
