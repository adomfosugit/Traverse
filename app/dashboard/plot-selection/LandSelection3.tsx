import getLands from '../../actions/getLands';
import LandCard from '../LandCard';
import { default as LandMap } from './LandMap';

const LandSelection = async () => {
  const lands = await getLands();
  return (
    <div>
      <main className="flex">
        <section className="flex-grow pt-14 px-6 lg:ml-16">
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Based on your answers, here are 3 lands:
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filterButton">Country</p>
            <p className="filterButton">Location</p>
            <p className="filterButton">Environment</p>
            <p className="filterButton">Region</p>
            <p className="filterButton">Architecture</p>
          </div>

          <div className="flex flex-col">
            {lands.map((land: any) => (
              <span key={land.id}>
                <LandCard land={land} />
              </span>
            ))}
          </div>
        </section>
        <section className="hidden lg:inline-flex lg:flex-grow lg:min-w-[600px] xl:min-w-[700px] 2xl:min-w-[870px]">
          <LandMap />
        </section>
      </main>
    </div>
  );
};

export default LandSelection;
