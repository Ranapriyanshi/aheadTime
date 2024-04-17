import './index.css';
import Navbar from './components/Navbar';
import MainSec from './components/MasinSec';
import Description from './components/Description';
import Scenarios from './components/Scenarios';
import AppIntro from './components/AppIntro';
import Suggestion from './components/Suggestion';
import Description2 from './components/Description2';
import Opinion from './components/Opinion';
import OpenSec from './components/OpenSec';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSec/>
      <Description/>
      <Scenarios/>
      <AppIntro/>
      <Suggestion/>
      <Description2/>
      <Opinion/>
      <OpenSec/>
    </div>
  );
}

export default App;
