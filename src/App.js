import { NavBar} from './Component/navBar';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Skill } from './Component/Skill';
import { Project } from './Component/Project';
import './App.css';
import "./img/kratos.png";

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
    </>
  );
}

export default App;
