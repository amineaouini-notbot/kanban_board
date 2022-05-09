import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import KanbanBoard from './components/KanbanBard/KanbanBard';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Board/:id' element={<KanbanBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
