import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>kanban Board</h1>
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
