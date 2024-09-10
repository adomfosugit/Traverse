import Image from 'next/image';

const Countries = () => {
  return (
    <div className="text-center justify-center place-items-center mt-16 bg-slate-50 py-12">
      <p className="text-2xl lg:text-3xl font-semibold mb-5 lg:pt-20">
        Where Traverse Operates
      </p>
      <p className="mx-6 lg:text-xl m-auto text-gray-600 mb-10">
        Ghana, Kenya, Nigeria, Senegal and growing
      </p>
      <div className="font-semibold mx-6">
        <span className="inline-grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 mx-auto gap-y-4 gap-x-6">
          <Image
            src="/assets/illustrations/ghana.svg"
            object-fit="contain"
            width={144}
            height={144}
            alt="Ghana"
            title="Ghana"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 smooth duration-300 h-36"
          />
          <Image
            src="/assets/illustrations/nigeria.svg"
            object-fit="contain"
            width={144}
            height={144}
            alt="Ministry of Works and Housing"
            title="Ministry of Works and Housing"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 h-36"
          />
          <Image
            src="/assets/illustrations/kenya.svg"
            object-fit="contain"
            width={144}
            height={144}
            alt="Diaspora Affairs"
            title="Diaspora Affairs - Office of the president"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 h-36"
          />
          <Image
            src="/assets/illustrations/senegal.png"
            object-fit="contain"
            width={144}
            height={144}
            alt="Senegal"
            title="Senegal"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 smooth duration-300 h-36"
          />
        </span>
      </div>
    </div>
  );
};

export default Countries;
