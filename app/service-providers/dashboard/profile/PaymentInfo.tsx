const PaymentInfo = () => {
  return (
    <div className="mt-10 bg-stone-50 p-10">
      <div className="flex flex-row justify-between">
        <div className="mr-6">
          <p className="font-bold text-base">Payment Information</p>
        </div>

        <div>
          <button
            className={`bg-traverse-yellow px-4 py-2 w-40 rounded text-center h-10 mt-2`}
          >
            Edit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">Payment Channel</p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="Select"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">Bank Name</p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="Ghana Commercial Bank"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">Account Number</p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200rounded-md p-2 w-full"
            placeholder="Enter account number"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
