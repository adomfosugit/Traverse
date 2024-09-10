interface IFormProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const Form = ({ showModal, setShowModal }: IFormProps) => {
  return (
    <div className="flex flex-col bg-white w-screen rounded-md mt-10 lg:w-[600px] lg:h-[720px] lg:mt-32 text-sm lg:mb-24 mx-5">
      <p className="mx-auto mb-3 mt-5 lg:mb-10 text-xl lg:text-3xl lg:font-semibold lg:mt-10 font-inter">
        Get Started
      </p>
      <div className="form ml-5 mr-5 font-inter">
        <p>Property Residence</p>
        <input
          className="bg-gray-100 w-full h-10 mt-2 mb-2 p-2 lg:h-16 lg:p-5 lg:mb-5 rounded-md"
          placeholder="Legon"
        />
        <p>Country you want to build in</p>
        <select
          title="location"
          className="bg-gray-100 w-full h-10 mt-2 mb-2 p-2 lg:h-16 lg:p-5 lg:mb-5 rounded-md"
          placeholder="Accra"
        >
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>
        <p>Email</p>
        <input
          className="bg-gray-100 w-full h-10 mt-2 mb-2 p-2 lg:h-16 lg:p-5 lg:mb-5 rounded-md"
          placeholder="johndoe@somemail.com"
        />
        <p>Property Residence</p>
        <input
          className="bg-gray-100 w-full h-10 mt-2 p-2 lg:h-16 lg:p-5 lg:mb-5 rounded-md"
          placeholder="+44741193478343"
        />
        <div
          onClick={() => setShowModal(false)}
          className="flex mt-5 lg:mt-9 h-10 bg-yellow-500 text-black items-center justify-center mb-5 rounded-md lg:h-16 lg:text-xl lg:mb-10"
        >
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
