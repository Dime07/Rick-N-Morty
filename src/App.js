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
import Search from './pages/search';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  
  return (
    <Router>
      <div className="App">

        {isLogin ? 
          (
            <p>
              <Navbar />
              
              <Routes>
                <Route path="/" element={<Character />}/>
              </Routes>
              <Routes>
                <Route path="/detail-character" element={<DetailCharacter />}/>
              </Routes>
              <Routes>
                <Route path="/about-us" element={<About />}/>
              </Routes>
              <Routes>
                <Route path="/search" element={<Search />}/>
              </Routes>
              
            </p>
          ) 
          : 
          (
            <p>
              <Routes>
                <Route path="/" element={<Login login={(data) => setIsLogin(data)}/>}/>
              </Routes>
            </p>
          )
        }
       
      </div>
    </Router>
  );
}

export default App;
