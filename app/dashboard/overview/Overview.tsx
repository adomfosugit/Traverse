import Header from './Header';
import Table from './Table';

const Overview = () => {
  return (
    <div>
      <Header
        title="Projects"
        subText="All projects you have show up here"
        buttonText="Start project"
      />
      <Table />
    </div>
  );
};

export default Overview;
