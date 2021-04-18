import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import HomeScreen from "./views/HomeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <div>
      <Header /> 
      <main>
      <Route path="/" component={HomeScreen} exact></Route>
      </main>
      </div>
    </Router> 
  );
}

export default App;
