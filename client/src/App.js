import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePage from './pages/CreatePage';
import CheckPage from './pages/CheckPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" Component={LoginPage} />
        <Route exact path="/home" Component={HomePage} />
        <Route exact path="/register" Component={RegisterPage} />
        <Route exact path="/create" Component={CreatePage} />
        <Route exact path="/check" Component={CheckPage} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}




export default App;
