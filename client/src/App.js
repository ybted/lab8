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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" Component={LoginPage} />
        <Route exact path="/home" Component={HomePage} />
        <Route exact path="/register" Component={RegisterPage} />
        <Route exact path="/create" Component={CreatePage} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}




export default App;
