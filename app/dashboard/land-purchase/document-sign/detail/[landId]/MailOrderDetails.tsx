const MailOrderDetails = () => {
  return (
    <div className="flex-col">
      <div className="flex bg-stone-50">
        <div className="h-auto w-full m-8">
          <p className="text-gray-500 text-sm font-semibold mt-5 mb-3">
            Your order
          </p>
          <div className="mr-20 text-sm text-gray-700">
            <div className="flex justify-between">
              <p>Postage</p>
              <p>GHS 0.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-stone-50 mt-4">
        <div className="h-auto w-full m-8">
          <p className="text-gray-500 text-sm font-semibold mt-5 mb-3">
            Pay with
          </p>
          <div className="mr-20 text-sm text-gray-700">
            <div className="flex justify-between">
              <span className="flex">
                <input type="radio" title="debit" name="payment" className="" />
                <p className="ml-2">Debit/Credit Card</p>
              </span>
            </div>
          </div>
          <div className="flex justify-between font-semibold mt-5 mr-20">
            <p>Total</p>
            <p>GHS 3450.00</p>
          </div>
          <div className="mt-10">
            <button className="bg-traverse-yellow py-2 w-full">
              Pay GHS 3550.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailOrderDetails;
