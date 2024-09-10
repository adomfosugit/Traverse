const PersonalInfoForm = () => {
  return (
    <div className="mt-10 bg-stone-50 p-10">
      <p className="font-medium">Personal Information</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">
            Name/Name of Entity
          </p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
            placeholder="Michael Jordan"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">Email Address</p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
            placeholder="michaeljordan@gmail.com"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">Email Address</p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
            placeholder="michaeljordan@gmail.com"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">Email Address</p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
            placeholder="michaeljordan@gmail.com"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">Office location</p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
            placeholder="No 12 Addis Ababa Street"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">Profession</p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
            placeholder="Surveyor"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">
            Professional Membership/Affiliation
          </p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
            placeholder="Institution of Surveyors"
          />
        </div>
        <div className="flex-col">
          <p className="flex text-sm text-slate-500 mb-1">
            Membership ID Number
          </p>
          <input
            className="bg-zinc-100 text-sm border border-gray-200 rounded-md p-2 w-full"
            placeholder="0000000000000"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
