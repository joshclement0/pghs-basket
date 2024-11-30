import { React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Local imports
import Navbar from './pages/util/Navbar';
import AdAgency from './pages/util/AddAgency'
import Home from "./pages/home"
import Players from './pages/players'
import Coaches from './pages/coaches'
import Calendar from './pages/calendar'
import Sponsor from './pages/sponsor'
import Donate from './pages/donate'
import MainHome from './pages/util/home';
import Highlights from './pages/highlights'

import routeContext from './pages/util/routecontext';
const queryClient = new QueryClient()

function InnerApp() {
  const { pathname, hash, key } = useLocation();
  const [sport, setSport] = useState();
  const value = { sport, setSport };

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
    <routeContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div style={{height:'90px'}}></div>
        <Routes >
          <Route exact key={0} path="/" element={<MainHome />} />
          <Route exact key={1} path="/:sport/" element={<Home />} />
          <Route exact key={2} path="/:sport/players" element={<Players hash={hash}/>} />
          <Route exact key={3} path="/:sport/coaches" element={<Coaches hash={hash}/>} />
          <Route exact key={4} path="/:sport/calendar" element={<Calendar />} />
          <Route exact key={5} path="/:sport/concessions" element={<Home />} />
          <Route exact key={6} path="/:sport/support/team" element={<Donate />} />
          <Route exact key={7} path="/:sport/support/sponsor" element={<Sponsor />} />
          <Route exact key={8} path="/:sport/highlight" element={<Highlights />} />
        </Routes>
        <AdAgency/>
        <div style={{height:'120px'}}></div>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </routeContext.Provider>

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

