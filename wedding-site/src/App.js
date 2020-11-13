import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Home from './components/Home'
import Reg from './components/Reg'
import Photos from './components/Photos'



const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    path: "/registry",
    component: Reg,
  },


  {
    path: "/photos",
    component: Photos,
  },




]

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
