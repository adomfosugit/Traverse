const BillingDetails = () => {
  return (
    <div className="h-auto w-full m-8">
      <p className="text-gray-500 text-sm font-semibold mt-5 mb-3">
        Billing Details
      </p>
      <div className="grid grid-cols-2 gap-4 mr-20">
        <div className="flex-col">
          <p className="flex text-sm text-gray-500 mb-1">First name</p>
          <input
            className="bg-gray-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="John"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-gray-500 mb-1">Last name</p>
          <input
            className="bg-gray-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="Doe"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-gray-500 mb-1">House number</p>
          <input
            className="bg-gray-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="House Number & Street Name"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-gray-500 mb-1">Street address</p>
          <input
            className="bg-gray-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="Apartment, suite (optional)"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-gray-500 mb-1">Town/City</p>
          <input
            className="bg-gray-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="Enter town/city name"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-gray-500 mb-1">
            Post Code/Zip (Optional)
          </p>
          <input
            className="bg-gray-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="Enter post/zip code"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-gray-500 mb-1">Email Address</p>
          <input
            type="email"
            className="bg-gray-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="eg: johndoe@mail.com"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-gray-500 mb-1">Phone Number</p>
          <input
            className="bg-gray-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="Enter phone number"
          />
        </div>
      </div>
      <div className="mt-4 flex">
        <input type="checkbox" title="check" />
        <span className="ml-3 text-sm text-gray-500">
          Save billing details for use next time.
        </span>
      </div>
    </div>
  );
};

export default BillingDetails;
