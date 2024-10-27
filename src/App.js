import './App.css';
import HomePage from './componets/Homepage';
import {LeaderBoard} from './componets/Leaderboeard';
import { CiUser } from "react-icons/ci";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componets/Authentication/Login';
import Signup from './componets/Authentication/SignUp';
function App() {

  return (
<>
<Router>
 <Routes>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Signup/>}/>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/leaderboard' element={<LeaderBoard/>}/>
 </Routes>
</Router>


</>
  );
}

export default App;

