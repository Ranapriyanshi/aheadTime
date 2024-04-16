import './index.css';
import Navbar from './components/Navbar';
import MainSec from './components/MasinSec';
import Description from './components/Description';
import Scenarios from './components/Scenarios';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSec/>
      <Description/>
      <Scenarios/>
    </div>
  );
}

export default App;
