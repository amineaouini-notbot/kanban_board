import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>kanban Board</h1>
        <Routes>
          <Route path='/' element={<h1>1111</h1>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
