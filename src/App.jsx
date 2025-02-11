import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage';
import BluePage from './BluePage';
import RedPage from './RedPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/blue" style={{ margin: '0 10px' }}>Blue</Link>
        <Link to="/red" style={{ margin: '0 10px' }}>Red</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/red" element={<RedPage />} />
      </Routes>
    </Router>
  );
}

export default App;