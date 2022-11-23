import Navbar from './components/navbar'
import Character from './pages/character';
import DetailCharacter from './pages/character/detailCharacter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation 
} from "react-router-dom";
import { useState } from 'react';
import './App.css';
import About from './pages/about';
import Login from './pages/login';

function App() {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <Router>
      <div className="App">

        {isLogin ? 
          (
            <p>
              <Navbar />
              
              <Routes>
                <Route path="/character" element={<Character />}/>
              </Routes>
              <Routes>
                <Route path="/detail-character" element={<DetailCharacter />}/>
              </Routes>
              <Routes>
                <Route path="/about-us" element={<About />}/>
              </Routes>
              
            </p>
          ) 
          : 
          (
            <p>
              <Routes>
                <Route path="/" element={<Login />}/>
              </Routes>
            </p>
          )
        }
       
      </div>
    </Router>
  );
}

export default App;
