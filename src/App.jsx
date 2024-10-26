import './css/App.css'
import pfp from './images/pfp.png'
import ProjectList from './Project-List'

function App() {

  return (
    <>
      <div className="container">
      <div className="box box-1">
        <h1>Projects</h1>
        <ProjectList></ProjectList>
      </div>
      <div className="box box-2">
        <p className='typing'>Hey! I’m a front-end web developer with four years of experience, diving into coding since 2020. 
          <br/><br/>I love games, manga, books and Komi.</p> <img src={pfp} alt="A pfp of mine should appear I think idk" />
      </div>
      <div className="box box-3">
        <h4>Dharshan Palani</h4>
      </div>
      <div className="box box-4">
      </div>
      <div className="box box-5">
      </div>
      </div>
    </>
  )
}

export default App
