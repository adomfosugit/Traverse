import Header from '../Header';
import Table from './Table';

const Projects = () => {
  return (
    <div>
      <Header
        title="Projects"
        subText="All projects assigned to you are shown here"
      />
      <Table />
    </div>
  );
};

export default Projects;
