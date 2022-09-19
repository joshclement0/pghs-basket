import { React, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";

// Local imports
import Navbar from './Navbar';
import AdAgency from './components/AddAgency'
import Home from "./pages/home/index"
import Players from './pages/players/index'
import Coaches from './pages/coaches/index'
import Calendar from './pages/calendar/index'


function InnerApp() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        // const id = hash.replace('#', '');
        const id = hash
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on r
  return (
    <div>
        <Navbar />
        <div style={{height:'90px'}}></div>
        <Routes >
          <Route exact key={0} path="/" element={<Home />} />
          <Route exact key={1} path="/players" element={<Players />} />
          <Route exact key={2} path="/coaches" element={<Coaches />} />
          <Route exact key={3} path="/calendar" element={<Calendar />} />
          <Route exact key={4} path="/concessions" element={<Home />} />
          <Route exact key={5} path="/support/team" element={<Home />} />
          <Route exact key={6} path="/support/sponsors" element={<Home />} />
        </Routes>
        <AdAgency />
        <div style={{height:'120px'}}></div>
    </div>

  );
}
function App(){
  return(
    <Router>
      <InnerApp />
    </Router>
  )
}

export default App;

