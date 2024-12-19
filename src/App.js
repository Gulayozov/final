import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MealDetails from './pages/MealDetails';

const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
      </Routes>
    </Router>
);

export default App;
