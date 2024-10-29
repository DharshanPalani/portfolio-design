import './css/App.css';
import pfp from './images/pfp.png';
import ProjectList from './Project-List';
import SkillList from './SkillList';
import ContactList from './ContactList';

function App() {
  return (
    <>
      <div className="container">
        <div className="box box-1">
          <h1>Projects</h1>
          <ProjectList />
        </div>
        <div className="box box-2">
          <p>
            <h2>About me</h2>
            Hey! I’m a front-end web developer with four years of experience, diving into coding since 2020.
            <br /><br />Please don't forget to check out my projects.
          </p>
        </div>
        <div className="box box-3">
          <h4>Dharshan Palani</h4>
        </div>
        <div className="box box-4">
          <SkillList /> {/* Use the SkillList component here */}
        </div>
        <div className="box box-5">
          <ContactList />
        </div>
      </div>
    </>
  );
}

export default App;
