import "./App.css";
import React from 'react';
import Navbar from './components/websiteCom/Navbar';
import SideBar from './components/websiteCom/SideBar';
import './css/Page.css';
// import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/websiteCom/About';
import Footer1 from './components/websiteCom/Footer1';
import Landing from "./components/Landing";
import Course from "./pages/Course";
import Playlist from "./pages/Playlist";
import Roadmaps from "./pages/Roadmap";
import Profile from "./components/websiteCom/Profile";
import Video from "./components/websiteCom/Video";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"></link>
function App() {
  return (
    <>
      <Router>
      {/* <Navbar /> */}
        <SideBar/>

        <Switch>
        
          <Route path='/' exact component={Home} />
          <Route path='/courses' component={Course} />
          <Route path='/about'  component={About} /> 
          <Route path='/landing'  component={Landing} />
          <Route path='/Playlist'  component={Playlist} />

          <Route path='/roadmaps' component={Roadmaps} />
          <Route path='/profile' component={Profile} /> 
          <Route path='/video' component={Video} />
          {/* <Route path='/preferences' component = {Preferences}/> */}
        </Switch>
        <Footer1/>
      </Router>
     
    </>
  );
}

export default App;
