import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
