import './index.css';
import Navbar from './components/Navbar';
import MainSec from './components/MasinSec';
import Description from './components/Description';
import Scenarios from './components/Scenarios';
import AppIntro from './components/AppIntro';
import Description2 from './components/Description2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSec/>
      <Description/>
      <Scenarios/>
      <AppIntro/>
      <Description2/>
    </div>
  );
}

export default App;
