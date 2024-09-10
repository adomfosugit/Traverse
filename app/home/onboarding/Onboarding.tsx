import { EOnboardingOptionIcon } from '../../types/common';
import OnboardingOption from './OnboardingOption';

const Onboarding = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-screen overflow-hidden">
        <div className="w-full mr-2 md:w-8/12 md:h-1/3 mt-16 md:mt-48 md:bg-white rounded-md md:mx-auto px-3 md:px-10 py-10">
          <h3 className="pb-10 font-medium">
            Hello user, what do you want to do today?
          </h3>
          <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-4">
            <OnboardingOption
              link="/dashboard/plot-selection"
              title="Purchase land"
              icon={EOnboardingOptionIcon.USER}
              color="yellow"
            />
            <OnboardingOption
              link="/faq"
              title="Purchase Land and Build a Property"
              icon={EOnboardingOptionIcon.USER}
              color="purple"
            />
            <OnboardingOption
              link="/faq"
              title="Port a project onto Traverse"
              icon={EOnboardingOptionIcon.USER}
              color="blue"
            />
            <OnboardingOption
              link="/faq"
              title="Build a Property Only"
              icon={EOnboardingOptionIcon.USER}
              color="green"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
