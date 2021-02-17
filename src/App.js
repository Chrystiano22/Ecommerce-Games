import './App.css';
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">


        <Header />
        <div>
          
          <Home />

        </div>
      </div>

    </Router>
  );
}

export default App;
