import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <Router>     
      <Navbar />
      <switch>
        <Route path='/' />
      </switch>
    </Router>

  );
}

export default App;
