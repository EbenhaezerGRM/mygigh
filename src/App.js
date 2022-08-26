import './App.css';
import NavBar from './Components/NavBar';
import "./Style/landingpage.css";
import Intro from './Components/Intro';
import Character from './Components/Character'
import Weapon from './Components/Weapon';
import Details from './Components/Details';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      {/* intro */}
      <div className="MyBg">
      <NavBar />
      <Intro />
      </div>
      {/* end of intro */}
      <div className='Character'> 
      <Character /> 
      </div>
      <div className='Weapon'>
      <Weapon />
      </div>
      <div className='BgDetails'>
        <Container>
        <Details />
        </Container>
      </div>
    </div>
    
  );
}

export default App;
