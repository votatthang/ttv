import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeadBar from './components/HeadBar/HeadBar';
//pages
import AboutMe from './Pages/AboutMe/AboutMe';
import Teaching from './Pages/Teaching/Teaching';
import Research from './Pages/Research/Research';
import MyTeam from './Pages/MyTeam/MyTeam';
import ContactMe from './Pages/ContactMe/ContactMe';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeadBar />
        <div className="body">
          <Profile />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<AboutMe />} />
              <Route path="/Teaching" element={<Teaching />} />
              <Route path="/Research" element={<Research />} />
              <Route path="/MyTeam" element={<MyTeam />} />
              <Route path="/ContactMe" element={<ContactMe />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
