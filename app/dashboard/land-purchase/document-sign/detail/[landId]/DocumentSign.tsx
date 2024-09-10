import { DASH_LAND_REGISTRATION } from '../../../../../../config/constants';
import Header from '../../../../overview/Header';

import { TSafeLandElement } from '../../../../../types';
import DescriptionMain from '../../../../plot-selection/DescriptionMain';
import BillingDetails from '../../../fee-payment/detail/[landId]/BillingDetails';
import MailOrderDetails from './MailOrderDetails';

interface IDocumentSignProps {
  land: TSafeLandElement | null;
}

const DocumentSign = ({ land }: IDocumentSignProps) => {
  const subText =
    'Your transaction documents can either be mailed to you for signing, or by granting Traverse limited Power of Attorney, Traverse can sign on your behalf to expedite the process';

  return (
    <div className="">
      <div className="mx-10">
        <Header
          backText="Back"
          title="Mail & Document Sign Off"
          subText={subText}
          buttonText="Continue"
          linkPath={`${DASH_LAND_REGISTRATION}/${land?.id}`}
        />
        <DescriptionMain land={land} />
        <div className="w-2/4 my-8 text-gray-500">
          <p className="text-sm">How do you want to sign this document?</p>
          <div className="flex w-full justify-between">
            <div className="flex">
              <input type="radio" name="method" title="mail" />
              <p className="ml-2">Mail it to me so I sign it</p>
            </div>
            <div className="flex ml-10">
              <input type="radio" name="method" title="mail" />
              <p className="ml-2">I want to grant you Power of Attorney</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-2 my-8 text-sm text-gray-500">
          <p>Note:</p>
          <p>
            Mailing this document for your signature may take a longer time and
            extend the purchase process.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="">
            <BillingDetails />
          </div>
          <div className="">
            <MailOrderDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentSign;
