import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import Login from "./pages/login/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;