import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import GalleryComp from "./Components/Gallery/GalleryComp";
import Contact from "./Components/Contact/Contact";

const RouterComp = () => {
    return (
        <Router>
      <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={GalleryComp} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={()=><h2>404 Not Found</h2>}/>
        </Switch>
      </div>
    </Router>
    );
}

export default RouterComp;
